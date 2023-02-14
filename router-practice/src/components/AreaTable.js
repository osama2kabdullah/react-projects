import React from "react";
import AreaTr from "./AreaTr";

const AreaTable = ({datas}) => {
  return (
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead style={{position: 'sticky', top: 0,}} class=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Country name
            </th>
            <th scope="col" class="py-3 px-6">
              Flag
            </th>
            <th scope="col" class="py-3 px-6">
              Area
            </th>
            <th scope="col" class="py-3 px-6">
              Population
            </th>
          </tr>
        </thead>
        <tbody>
            {
                datas.map(data=><AreaTr data={data}></AreaTr>)
            }
        </tbody>
      </table>
    </div>
  );
};

export default AreaTable;
