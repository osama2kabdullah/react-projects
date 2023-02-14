import React from "react";
import { Outlet, useParams } from "react-router-dom";
import useLoadData from "../hooks/useLoadData";

const CountryDetail = () => {
  const { countryDetails } = useParams();
  const [datas, setDatas] = useLoadData(
    `https://restcountries.com/v3.1/alpha/${countryDetails}`
  );

  console.log(datas[0]);

  return (
    <div className="text-xl flex flex-row gap-6 justify-between">
      <div>
      <h1 className="text-5xl">
        {datas?.[0]?.name.common}
        <span className="text-2xl">({datas?.[0]?.region})</span>
      </h1>

      <p className="p-4 pl-0 font-semibold">
        {datas?.[0]?.unMember ? (
          <p className="text-green-600">UN Member</p>
        ) : (
          <p className="text-red-600">Not a UN Member</p>
        )}
        
        {datas?.[0]?.independent ? <p className="text-green-600">Independent</p> : <p className="text-red-600">dependent</p>}
        
      </p>

      <div className="flex flex-col gap-3">
      <p>Capital: {datas?.[0]?.capital?.[0]}</p>
      <p>Area: {datas?.[0]?.area} km²</p>
      <p>Population: {datas?.[0]?.population}</p>
      <p>
        <a className="text-blue-800 underline" href={datas?.[0]?.maps?.googleMaps}>See on Google Map</a>
      </p>
      </div>
      </div>
      <img className="w-3/6 h-auto" src={datas?.[0]?.flags?.png} alt="" />
    </div>
  );
};

export default CountryDetail;