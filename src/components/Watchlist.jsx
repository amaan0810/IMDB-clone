import React from "react";

export const Watchlist = () => {
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className=" mx-3 bg-blue-400 rounded-xl flex justify-center h-[2rem] w-[7rem] text-white font-bold items-center">
          Action
        </div>
        <div className=" mx-3 bg-gray-400/50 rounded-xl flex justify-center h-[2rem] w-[7rem] text-white font-bold items-center">
          Action
        </div>
      </div>

      <div className="flex justify-center my-4 rounded-xl">
        <input
          className="h-[2rem] w-[18rem] bg-gray-200 px-3"
          type="text"
          placeholder="Search for movies"
        />
      </div>
      <div className="border border-gray-200 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-center text-gray-700">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center py-3 px-3">
                <img
                  className="h-[5rem] w-[4rem]"
                  src={`https://m.media-amazon.com/images/M/MV5BZTg1ODU5NzctMWRlNC00ZDQxLWE4YmYtZjc0OWZhMTFlNzU0XkEyXkFqcGc@._V1_.jpg`}
                />
                <div className="mx-6"> if Movie </div>
              </td>
              <td>8.5</td>
              <td>9</td>
              <td>action</td>
              <td className="text-red-500">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
