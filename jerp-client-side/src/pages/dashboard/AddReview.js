import React, { useState } from "react";
import HelemetMe from "../shared/HelemetMe";

const AddReview = () => {
    const [ratings, setRatings] = useState(1);
    const handleReviewSubmit = e => {
        e.preventDefault();
        const doc = {rating: e.target.ratings.value, reviwMessage: e.target.reviewText.value};
        if(doc.reviwMessage){
            fetch('http://localhost:5000/addreview', {
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access_token')}`,
                    'content-type':'application/json'
                },
                body: JSON.stringify(doc)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
    }
  return (
    <div class="block p-6 mx-auto rounded-lg shadow-lg bg-white max-w-sm">
      <HelemetMe>Add a review</HelemetMe>
      <h1 className="text-center text-2xl font-bold mb-8">Add a Review</h1>
      <form onSubmit={handleReviewSubmit}>
        <div className="flex gap-8 mb-5">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
          >
            Ratings
          </label>
          <div className="flex items-center gap-3">
          <svg onClick={()=>{
            if(ratings > 1){
                setRatings(ratings - 1)
            }
            
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 cursor-pointer bg-red-300 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
</svg>
          
          <input name="ratings" className="bg-white text-xl w-8 text-center" onChange={e=>setRatings(e.target.value)} value={ratings} />
          <svg onClick={()=>{
            if(ratings < 5){
                setRatings(ratings + 1)
            }
            
            }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 cursor-pointer bg-red-300 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
          </div>
        </div>
        <div class="form-group mb-6">
          <label
            for="exampleInputPassword2"
            class="form-label inline-block mb-2 text-gray-700"
          >
            The Message that you give us
          </label>
          <textarea
            name="reviewText"
            id=""
            className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            cols="30"
            rows="3"
          ></textarea>
        </div>

        <button
          type="submit"
          class="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
