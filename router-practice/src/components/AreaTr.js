import React from "react";

const AreaTr = ({data}) => {
    console.log(data?.flags.png);
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.name.common}
      </th>
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <img className="w-9" src={data?.flags.png} alt="" />
      </th>
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.area} km²
      </th>
      <th
        scope="row"
        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.population} 
      </th>
    </tr>
  );
};

export default AreaTr;
