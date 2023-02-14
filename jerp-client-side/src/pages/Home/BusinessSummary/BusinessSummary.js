import React from "react";
import { useQuery } from "react-query";
import FullPageLoading from "../../shared/FullPageLoading";
import HeadTitle from "../../shared/HeadTitle";

const BusinessSummary = () => {
  const {data: reviews, isLoading} = useQuery('loadReview', ()=>fetch('http://localhost:5000/reviews').then(res=>res.json()));
  const {data: users, isLoading: userLoading} = useQuery('userQuantity', ()=>fetch('http://localhost:5000/usersquantity', {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  }).then(res=>res.json()));
  
  if(isLoading || userLoading){
    return <FullPageLoading></FullPageLoading>
  };
  return (
    <div className="lg:mx-12 mx-8 my-32">
      <HeadTitle>Business Summary</HeadTitle>
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-32 h-32 text-blue-500 mx-auto block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <h3 className="text-2xl text-center">We served {users.usersCount} customers</h3>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-32 h-32 text-blue-500 mx-auto block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
            />
          </svg>
          <h3 className="text-2xl text-center">0 Annual revenue</h3>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-32 h-32 text-blue-500 mx-auto block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <h3 className="text-2xl text-center">{reviews.result.length} Reviews</h3>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
