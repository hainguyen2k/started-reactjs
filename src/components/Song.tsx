import React from "react";

function Song() {
  return (
    <div className="col-span-1">
      <div className="relative">
        <img
          className="blur-sm p-5"
          src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
          alt=""
        ></img>
        <div className=" absolute top-2 left-2">
          <h1 className="text-cyan-600 font-bold">Now playing</h1>
          <h2 className="text-zinc-400 mt-5 text-2xl">Sing me to sleep</h2>
        </div>
        <div className="flex items-center absolute left-2 ">
          <img
            className="rounded-full object-scale-down h-20"
            src="https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576"
            alt=""
          ></img>
          <span className="text-zinc-400 ml-6">Alan Walker</span>
        </div>
      </div>
    </div>
  );
}

export default Song;
