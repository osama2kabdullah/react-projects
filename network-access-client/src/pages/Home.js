import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [vTopics, setVtopics] = useState([]);
  //availbale data
  const [page, setpage] = useState([]);
  useEffect(() => {
    const loadAllData = async () => {
      const { data } = await axios.get(
        "https://sleepy-brushlands-75204.herokuapp.com/dataQuantity"
      );
      setpage(data.result);
    };
    loadAllData();
  }, []);
  //pagination
  const [currentpage, setCurrentpage] = useState(0);
  console.log(currentpage);
  useEffect(() => {
    fetch(
      `https://sleepy-brushlands-75204.herokuapp.com/volenteerTopics?page=${currentpage}`
    )
      .then((res) => res.json())
      .then((data) => setVtopics(data));
  }, [currentpage]);

  //hndlTopicDetail
  const navigate = useNavigate();
  const hndlTopicDetail = (id) => {
    navigate("/topicdetail/" + id);
  };
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1 style={{margin: '2em 2em 1em 2em'}}>I grow by helping people in need.</h1>
        <form class="form-inline search-bar mx-auto d-flex w-12">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto",
          gap: "3em",
          margin: "4em",
        }}
      >
        {vTopics.map((data) => (
          <div onClick={() => hndlTopicDetail(data?._id)} class="card">
            <img src={data.picture} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "1em",
          fontSize: "1.1rem",
          margin: "2em 4em",
          border: ".5px solid",
        }}
      >
        {[...Array(Math.ceil(page / 8)).keys()].map((key) => (
          <button
            onClick={() => setCurrentpage(key)}
            style={
              currentpage === key
                ? {
                    backgroundColor: "red",
                    border: ".5px solid",
                    padding: "0 15px",
                  }
                : { border: ".5px solid", padding: "0 15px" }
            }
          >
            {key + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
