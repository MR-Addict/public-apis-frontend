import { FaRegHandPointLeft } from "react-icons/fa";

export default function Page() {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-4 whitespace-nowrap'>
      <h1 className='text-2xl font-bold'>Free Public APIs</h1>
      <div className='bg-purple-500 p-3 rounded-md font-bold text-white flex flex-row items-center justify-center gap-2'>
        <FaRegHandPointLeft className='text-3xl' />
        <span className='text-xl'>Find One in Sidebar</span>
      </div>
    </div>
  );
}
