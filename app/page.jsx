import Image from "next/image";
import Link from "next/link";

import welcome from "../data/welcome.jpg";
import readJson from "../lib/readJson";

export default async function Page() {
  const categoriesData = await readJson("categories.json");
  return (
    <div className='w-full h-full flex flex-col items-center justify-start gap-10'>
      <div className='w-[400px] md:w-[500px] mt-5'>
        <Image src={welcome} alt='welcome' placeholder='blur' className='object-center' />
      </div>
      <div className='flex flex-col items-center justify-center gap-7 whitespace-nowrap'>
        <h1 className='text-3xl md:text-4xl font-bold text-slate-700'>FIND FREE PUBLIC APIS</h1>
        <div className='flex flex-row items-center justify-center gap-7'>
          <Link
            href={categoriesData.categories[0]}
            className='bg-slate-100/70 hover:bg-slate-200 duration-500 py-2 px-4 italic shadow-md rounded-md font-bold text-slate-700'
          >
            <span className='text-xl'>Find One in Sidebar</span>
          </Link>
          <Link
            href='/random'
            className='bg-purple-500 hover:bg-purple-600 duration-500 py-2 px-4 italic shadow-md rounded-md font-bold text-white'
          >
            <span className='text-xl'>Select A Random One</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
