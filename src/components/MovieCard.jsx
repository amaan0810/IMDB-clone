import React from "react";

export const MovieCard = ({ poster_path, movie_name }) => {
  return (
    <div
      className=" h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl ">
        {movie_name}
      </div>
    </div>
  );
};
