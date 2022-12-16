import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";

import loader from "./loader.gif";

export default function Page() {
  return (
    <div className='w-full h-full'>
      <div className='w-[50vw] h-full flex flex-col items-center justify-center gap-10'>
        <div className='w-72 h-40  p-5 bg-white shadow-md rounded-xl flex flex-col items-center justify-center gap-4'>
          <Image src={loader} alt='Loader' width={20} />
          <h1 className='text-2xl font-bold py-2 px-4 rounded-md bg-purple-500 text-white'>Loading...</h1>
        </div>
      </div>
    </div>
  );
}
