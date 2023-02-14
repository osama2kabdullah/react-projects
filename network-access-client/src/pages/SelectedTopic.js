import React, { useEffect, useState } from "react";
import auth from "../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import axios from "axios";

const SelectedTopic = () => {
  const [user] = useAuthState(auth);
  const [datas, setDatas] = useState([]);
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
        setDatas(data);
      };
      loadUserSelectedData();
    }
  }, [user?.email]);

  //delete topic
  const deleteTopic = (id) => {
    const procced = window.confirm("deleting??");
    if (procced) {
      fetch("https://sleepy-brushlands-75204.herokuapp.com/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      //rm from ui
      const rest = datas.filter((data) => data?._id !== id);
      setDatas(rest);
    }
  };

  return (
    <div>
      <h2 className="text-center">You selected {datas?.length} topics</h2>
      <div
        className="d-grid mx-5 mt-5"
        style={{ gridTemplateColumns: "auto auto auto", gap: "5em" }}
      >
        {datas.map((data) => (
          <div class="float-right card selected-box">
            <div class="row">
              <div class="col-sm-5">
                <img class="d-block w-100" src={data?.picture} alt="" />
              </div>
              <div class="col-sm-7">
                <div class="card-block">
                  {/* <!--           <h4 class="card-title">Small card</h4> --> */}
                  <p>Copy paste the HTML and CSS.</p>
                  <p>Change around the content for awsomenes</p>
                  <br />
                  <div className="selected-box-footer">
                  <button
                    onClick={() => deleteTopic(data?._id)}
                    class="btn btn-secondary"
                  >
                    Delete trhis topic
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedTopic;
