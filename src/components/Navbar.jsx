import React from "react";

import Logo from "../assets/video-camera.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px] " src={Logo} alt="logo" />
      <Link to="/" className="text-blue-600 font-bold text-xl">
        Movies
      </Link>
      <Link to="/watchlist" className="text-blue-600 font-bold text-xl">
        WatchList
      </Link>
    </div>
  );
};
