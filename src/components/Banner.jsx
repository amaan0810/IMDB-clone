import React from "react";

export const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://wallpapers.com/images/hd/avengers-endgame-superheroes-2ujw4a3pp2gh8xpf.jpg)`,
      }}
    >
      <div className="text-white text-xl bg-gray-900/60 text-center w-full p-4">
        Avengers Endgame
      </div>
    </div>
  );
};
