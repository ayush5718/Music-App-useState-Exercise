import React from "react";

function Card({ songData, handleClick, index }) {
  const { songName, artistName, image, added } = songData;
  return (
    <div className="flex justify-between w-60 rounded-md bg-zinc-100 p-4 selection:text-red-600 selection:bg-sky-300 pb-16 relative">
      <div className="img w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="w-full h-full object-cover " src={image} alt="" />
      </div>
      <div>
        <h1 className="text-xl font-semibold leading-none whitespace-nowrap">
          {songName}
        </h1>
        <h3 className="text-sm">{artistName}</h3>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`text-xs absolute  ${
          added ? "bg-sky-400" : "bg-orange-600"
        } rounded-full py-2 px-3 bottom-2 text-white`}
      >
        {added ? "Added" : "Add to favourites"}
      </button>
    </div>
  );
}

export default Card;
