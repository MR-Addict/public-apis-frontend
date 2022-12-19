"use client";

import { IoMdRefresh } from "react-icons/io";
import { useState } from "react";

import EntryCard from "../../components/EntryCard/EntryCard";

export default function RandomCard() {
  const [message, setMessage] = useState("");
  const [randomEntity, setRandomEntity] = useState(null);

  const handleClick = async () => {
    setMessage("Loading...");
    await fetch("https://api.publicapis.org/random")
      .then((res) => res.json())
      .then((data) => {
        setRandomEntity(data.entries[0]);
        setMessage("");
      })
      .catch((err) => {
        setRandomEntity(null);
        setMessage("Error occurred!");
      });
  };

  return (
    <div className='max-w-[270px] w-auto flex flex-col items-center gap-5'>
      <button onClick={handleClick} className='text-purple-600 hover:text-purple-800 shadow-lg rounded-full'>
        <IoMdRefresh size={40} />
      </button>
      {randomEntity && <EntryCard item={randomEntity} />}
      {!randomEntity && <p>{message}</p>}
    </div>
  );
}
