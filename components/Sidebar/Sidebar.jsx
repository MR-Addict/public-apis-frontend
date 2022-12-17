import Link from "next/link";

import categoriesData from "./config";

export default async function Sidebar() {
  return (
    <div className='flex flex-col gap-2'>
      <div className='sticky top-0 left-0'>
        <h1 className='text-xl font-bold py-2'>Category</h1>
        <div className='w-[20vw] whitespace-nowrap overflow-auto max-h-[75vh] border-t-2 border-gray-700 flex flex-col'>
          {categoriesData.categories.map((item) => (
            <Link key={item} href={item} className='hover:bg-secondary-bg p-1 rounded-sm'>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
