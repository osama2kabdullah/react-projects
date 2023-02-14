import React from "react";
import useReview from "../hooks/useReview";
import Button from "./Button";
import ReviwCard from "./ReviwCard";

const Home = () => {
  const [reviews] = useReview();
  const selectedReviews = reviews.slice(0, 2);
  return (
    <div>
      <div className="grid grid-cols-2 mt-0 gap-5 m-16 items-center">
        <div>
          <h1 className="text-7xl font-extrabold">Your Best Laptop</h1>
          <p className="text-2xl p-4 pl-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            ab quisquam ut atque, nobis expedita enim veniam. Recusandae
            assumenda iure, aliquam sed illo vel nulla. Labore magnam id
            recusandae officia.
          </p>
        </div>
        <img
          src="https://www.bhphotovideo.com/images/images2500x2500/Lenovo_08763DU_IdeaPad_U260_12_5_Notebook_754802.jpg"
          alt="bannar"
        />
      </div>
      <div className="m-16 mt-0">
        <h1 className="text-4xl font-bold p-2 text-center">Reviews</h1>

        <div className="grid grid-cols-2">
          {selectedReviews.map((review) => (
            <ReviwCard key={review._id} review={review}></ReviwCard>
          ))}
        </div>
        <div className="text-center mx-auto">
        <Button click='/review'>Show All</Button>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
