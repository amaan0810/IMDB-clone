import React from "react";

export const Pagination = ({ pageNo, HandelFor, HandelPrev }) => {
  return (
    <div className="bg-gray-900/60 p-4 mt-8 flex justify-center text-white">
      <div className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-backward" onClick={HandelPrev}></i>
      </div>
      <div className="font-bold">{pageNo}</div>
      <div className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-forward" onClick={HandelFor}></i>
      </div>
    </div>
  );
};
