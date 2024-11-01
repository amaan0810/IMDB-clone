import React from "react";
import { MovieCard } from "./MovieCard";

export const Movies = () => {
  return (
    <div className="p-5">
      <div className="font-bold text-2xl text-center mb-5 m-2">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
