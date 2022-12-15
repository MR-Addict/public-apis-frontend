import { FaRegHandPointLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className='w-full h-full'>
      <div className='w-[50vw] h-full flex flex-col items-center justify-center gap-10'>
        <div className='w-[25vw] h-[20vh] p-5 bg-white shadow-md rounded-xl flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl font-bold'>Free Public APIs</h1>
          <div className='bg-[#A555EC] p-3 rounded-md text-xl font-bold text-white flex flex-row items-center justify-center gap-2'>
            <FaRegHandPointLeft className='text-black text-3xl' />
            <span>Find One in Sidebar</span>
          </div>
        </div>
      </div>
    </div>
  );
}
