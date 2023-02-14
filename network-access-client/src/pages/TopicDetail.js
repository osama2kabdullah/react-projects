import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

const TopicDetail = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { tpicId } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://sleepy-brushlands-75204.herokuapp.com/topicdetail/" + tpicId)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [tpicId]);

  //hndleAddToDb
  const email = user?.email;
  const { about, picture } = data;
  const savingData = { email, about, picture };
  const hndleAddToDb = () => {
    if (!user) {
      alert("you must login first");
      return;
    }
    fetch("https://sleepy-brushlands-75204.herokuapp.com/addTopic", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(savingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          navigate("/selectedTopic");
        }
      });
  };

  const match = [];
  const [selectedData, setSelectedData] = useState([]);
  for (const index in selectedData) {
    // console.log(selectedData[index].picture);
    // console.log(data.picture);
    if (selectedData[index].picture === data.picture) {
      match.push(data.picture);
    }
  }
  console.log(match.length);

  //load email base data
  useEffect(() => {
    if (user?.email) {
      const loadUserSelectedData = async () => {
        const { data } = await axios.get(
          "https://sleepy-brushlands-75204.herokuapp.com/selectedtopics?email=" +
            user?.email,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setSelectedData(data);
      };
      loadUserSelectedData();
    }
  }, [user?.email]);

  return (
    <div
      class="card mb-3"
      style={{ maxWidth: "540px", margin: "auto", marginTop: "10vh" }}
    >
      <div class="row g-0">
        <div class="col-md-4">
          <img src={data?.picture} class="img-fluid rounded-start" alt="..." />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title</h5>
            <p class="card-text">{data?.about}</p>
            {match.length ? (
              <button class="btn btn-primary" disabled>
                Already selected
              </button>
            ) : (
              <button onClick={hndleAddToDb} class="btn btn-primary">
                Select this topic
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
