import sidebarData from "./config";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className='sticky top-0 flex flex-col gap-2'>
      <h1 className='text-xl font-bold'>
        Categories(<span>{sidebarData.count}</span>)
      </h1>
      <div className='w-[20vw] overflow-y-auto max-h-[85vh] border-t-2 border-gray-700 flex flex-col gap-1'>
        {sidebarData.categories.map((item) => (
          <Link key={item} href={item} className='hover:bg-slate-300 p-1 rounded-sm'>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
