import { Card, Dropdown } from "flowbite-react";
import React from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import HeadTitle from "../../shared/HeadTitle";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const {data: reviews, isLoading} = useQuery('loadReview', ()=>fetch('http://localhost:5000/reviews').then(res=>res.json()));
  if(isLoading){
    return <FullPageLoading></FullPageLoading>
  };
  return (
    <div className="lg:mx-12 mx-8 my-32">
      <HeadTitle>Reviews</HeadTitle>
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-8">
        {
        reviews?.result?.map(review=><ReviewCard review={review}></ReviewCard>)
        }
      </div>
    </div>
  );
};

export default Review;
