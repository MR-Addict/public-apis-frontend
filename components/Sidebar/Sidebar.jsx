import Link from "next/link";

import readJson from "../../lib/readJson";

export default async function Sidebar() {
  const categoriesData = await readJson("categories.json");
  return (
    <div className='flex flex-col gap-2'>
      <div className='sticky top-0 left-0'>
        <h1 className='text-xl font-bold pb-2'>Category</h1>
        <div className='w-full md:w-64 whitespace-nowrap overflow-auto h-[40vh] md:h-[75vh] flex flex-col gap-1 border-2 md:border-0 border-slate-400 p-2 md:p-0 rounded-md'>
          {categoriesData.categories.map((item, index) => (
            <Link key={index} href={item} className='hover:text-purple-600'>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
