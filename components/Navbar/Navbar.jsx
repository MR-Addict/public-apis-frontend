import menuData from "./config";
import Link from "next/link";

function MenuCard({ item }) {
  return (
    <Link
      href={item.href}
      className='flex flex-row items-center font-bold text-slate-700 text-xl gap-2 duration-300 hover:text-purple-600'
    >
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className='px-5 md:px-48 py-5 shadow-lg bg-secondary-bg flex flex-row items-center justify-between'>
      <Link href='/' className='flex flex-row items-center gap-1 font-bold text-2xl italic'>
        <h1 className='text-slate-700'>Public</h1>
        <h1 className='px-2 bg-purple-600 rounded-md text-white'>APIs</h1>
      </Link>
      <div className='flex flex-row gap-4 text-lg'>
        {menuData.map((item) => (
          <MenuCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
