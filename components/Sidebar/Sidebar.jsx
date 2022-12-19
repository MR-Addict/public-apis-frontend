import Link from "next/link";

import readJson from "../../lib/readJson";

export default async function Sidebar() {
  const categoriesData = await readJson("categories.json");
  return (
    <div className='flex flex-col gap-2'>
      <div className='sticky top-0 left-0'>
        <h1 className='text-xl font-bold pb-2'>Category</h1>
        <div className='w-64 whitespace-nowrap overflow-auto max-h-[75vh] border-t-2 border-gray-700 flex flex-col gap-1'>
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
