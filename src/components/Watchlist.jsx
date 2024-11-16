import React, { useEffect, useState } from "react";
import genreids from "../utility/genre.js";

export const Watchlist = ({
  watchlist,
  setWatchlist,
  handleRemovetoWatchlist,
}) => {
  const [search, setSearch] = useState("");
  const [genrelist, setGenreList] = useState(["All Genre"]);
  const [currgenre, setCurrgenr] = useState("All Genre");

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const sortInc = () => {
    let sorti = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sorti]);
  };

  const sortDec = () => {
    const sortd = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortd]);
  };

  const handleFiletr = (genre) => {
    setCurrgenr(genre);
  };

  useEffect(() => {
    let temp = watchlist.map((movieobj) => {
      return genreids[movieobj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genre", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre) => {
          return (
            <div
              onClick={() => handleFiletr(genre)}
              className={
                currgenre == genre
                  ? " mx-3 bg-blue-400 rounded-xl flex justify-center h-[2rem] w-[7rem] text-white font-bold items-center"
                  : " mx-3 bg-gray-400 rounded-xl flex justify-center h-[2rem] w-[7rem] text-white font-bold items-center"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4 rounded-xl">
        <input
          className="h-[2rem] w-[18rem] bg-gray-200 px-3"
          type="text"
          placeholder="Search for movies"
          onChange={handelSearch}
          value={search}
        />
      </div>
      <div className="border border-gray-200 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-center text-gray-700">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>
                <div className="flex justify-center ">
                  <div className="p-2" onClick={sortDec}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div className="p-2">Ratings</div>
                  <div className="p-2" onClick={sortInc}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieobj) => {
                if (currgenre == "All Genre") {
                  return true;
                } else {
                  return genreids[movieobj.genre_ids[0]] == currgenre;
                }
              })
              .filter((movieobj) => {
                return movieobj.original_title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieobj) => {
                return (
                  <tr key={movieobj.id}>
                    <td className="flex items-center py-3 px-3">
                      <img
                        className="h-[5rem] w-[4rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieobj.poster_path}`}
                      />
                      <div className="mx-6">{movieobj.original_title} </div>
                    </td>
                    <td>{movieobj.vote_average}</td>
                    <td>{movieobj.popularity}</td>
                    <td>{genreids[movieobj.genre_ids[0]]}</td>
                    <td
                      className="text-red-500"
                      onClick={() => handleRemovetoWatchlist(movieobj)}
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
