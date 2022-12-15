"use client";
import { RiErrorWarningLine } from "react-icons/ri";

export default function Error() {
  return (
    <div className='w-full h-full'>
      <div className='w-[50vw] h-full flex flex-col items-center justify-center gap-10'>
        <div className='w-[25vw] h-[20vh] p-5 bg-white shadow-md rounded-xl flex flex-col items-center justify-center gap-4'>
          <RiErrorWarningLine className='text-3xl' />
          <h1 className='text-2xl font-bold'>Error Occurred!</h1>
        </div>
      </div>
    </div>
  );
}
