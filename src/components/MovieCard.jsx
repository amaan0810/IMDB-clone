import React from "react";

export const MovieCard = () => {
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
      style={{
        backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BZTg1ODU5NzctMWRlNC00ZDQxLWE4YmYtZjc0OWZhMTFlNzU0XkEyXkFqcGc@._V1_.jpg)`,
      }}
    ></div>
  );
};
