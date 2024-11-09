import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import axios from "axios";
import { Pagination } from "./Pagination";

export const Movies = () => {
  let [movies, setmovies] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ef1f62db9d9e420782c98d528765e40a&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results);
        setmovies(res.data.results);
      });
  }, [pageNo]);

  const HandelPrev = () => {
    if (pageNo == 1) {
      setPageNo(1);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const HandelFor = () => {
    setPageNo(pageNo + 1);
  };

  return (
    <div className="p-5">
      <div className="font-bold text-2xl text-center m-5">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around  gap-5">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              poster_path={movie.poster_path}
              movie_name={movie.original_title}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        HandelFor={HandelFor}
        HandelPrev={HandelPrev}
      />
    </div>
  );
};

// https://api.themoviedb.org/3/movie/popular?api_key=ef1f62db9d9e420782c98d528765e40a&language=en-US&page=1
