import React from "react";
import useReview from "../hooks/useReview";
import ReviwCard from "./ReviwCard";

const Review = () => {
  const [reviews] = useReview();
  return (
    <div className="m-8">
      <h1 className="text-4xl font-bold p-2 text-center">Reviews</h1>
      <div className="grid grid-cols-2">
        {reviews.map((review) => (
          <ReviwCard key={review._id} review={review}></ReviwCard>
        ))}
      </div>
    </div>
  );
};

export default Review;
