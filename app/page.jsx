import { FaRegHandPointLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className='w-full h-full'>
      <div className='w-[50vw] h-full flex flex-col items-center justify-center gap-10'>
        <div className='w-72 h-40 p-5 bg-white shadow-md rounded-xl flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-bold'>Free Public APIs</h1>
          <div className='bg-[#A555EC] p-3 rounded-md font-bold text-white flex flex-row items-center justify-center gap-2'>
            <FaRegHandPointLeft className='text-black text-sm md:text-3xl' />
            <span className='text-sm md:text-xl'>Find One in Sidebar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
