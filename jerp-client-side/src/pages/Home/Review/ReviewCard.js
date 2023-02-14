import { Card, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import RatingMe from "./RatingMe";
import ReviewStar from "./ReviewStar";
import dummyavatar from "../../../assests/images/dummyavatar.jfif";

const ReviewCard = ({ review }) => {
  const array = Array(parseInt(review?.rating));
  const [photoURL, setPhotoURL] = useState("");
  useEffect(() => {
    if (review) {
      fetch(
        "http://localhost:5000/finduser/" + review.user.email,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotoURL(data.doc?.photoURL);
        });
    }
  }, [review]);
  return (
    <div className="max-w-sm">
      <Card>
        <div className="flex flex-col items-center pb-10">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={photoURL || dummyavatar} alt=''/>
            </div>
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {review?.user?.doc?.UserName || review?.user.email}
          </h5>
          <div className="flex">
            <RatingMe rating={review?.rating}></RatingMe>
          </div>

          <span className="text-sm text-gray-500 dark:text-gray-400">
            {review?.reviwMessage}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
