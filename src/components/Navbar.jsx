import React from "react";
import { Link } from "react-router-dom";
function Navbar({ songData }) {
  return (
    <div className="flex justify-between items-center bg-zinc-200 py-4 px-20 mt-2 m-2 rounded-full">
      <h1>Music Appp</h1>
      <Link to="/fav" className="flex p-2 bg-orange-500 text-white rounded-xl">
        Favourites
        <p className="ml-2">{songData.filter((item) => item.added).length}</p>
      </Link>
    </div>
  );
}

export default Navbar;
