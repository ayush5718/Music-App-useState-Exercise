import React, { useState } from "react";
import Card from "../Card";
import Navbar from "../Navbar";
function Home() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Disco",
      artistName: "Aayush Kumar",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Ashiqi",
      artistName: "Arjit singh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?q=80&w=1782&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      songName: "Bekhayali",
      artistName: "Darshan Raval",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemIndex) => {
        if (itemIndex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen ">
        <Navbar songData={songData} />
        <div className="flex justify-center flex-wrap gap-10 mt-10 px-20">
          {songData.map((item, index) => (
            <Card
              songData={item}
              handleClick={handleClick}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
