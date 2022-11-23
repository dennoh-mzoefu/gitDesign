import React from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { FcLike } from "react-icons/fc";

function Repository() {
  return (
    <div className="rounded-lg w-1/3 border border-gray-300  p-3 m-2">
      <div className="flex justify-between ">
        <p className="font-bold text-blue-600">Personal Portfolio</p>
        <button className="border-solid border-gray-300 border border-black rounded-full px-1 text-xs">
          Public
        </button>
      </div>
      <p className="py-1 my-2">my personal portfolio(html,css,js)</p>
      {/* <div className="flex justify-between ">
        <div className="flex ">
          . <p>Scss</p>
        </div>
      </div> */}
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="flex items-center pl-0 pr-2 text-2xl text-green-400 hover:drop-shadow-xl">
            <span>
              <GoPrimitiveDot />
            </span>
          </p>
          <span>Budget</span>
        </div>
        <FcLike />
      </div>
    </div>
  );
}

export default Repository;
