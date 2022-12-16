"use client";
import { RiErrorWarningLine } from "react-icons/ri";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error, cannot fetch entries!");
  }, [error]);
  return (
    <div className='w-full h-full'>
      <div className='w-[50vw] h-full flex flex-col items-center justify-center gap-10'>
        <div className='w-72 h-40 p-5 bg-white shadow-md rounded-xl flex flex-col items-center justify-center gap-4'>
          <RiErrorWarningLine className='text-3xl' />
          <button className='text-2xl font-bold py-2 px-4 rounded-md bg-purple-500 text-white' onClick={() => reset()}>
            Retry
          </button>
        </div>
      </div>
    </div>
  );
}
