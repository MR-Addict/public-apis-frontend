import menuData from "./config";
import Link from "next/link";

function MenuCard({ item }) {
  return (
    <Link
      href={item.href}
      className='flex flex-row items-center gap-2 border-b-2 border-gray-700 border-opacity-0 hover:border-opacity-100'
    >
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className='w-full h-[10vh] shadow-lg bg-secondary-bg px-[15vw] flex flex-row items-center justify-between'>
      <h1 className='font-bold text-2xl'>Public APIs</h1>
      <div className='flex flex-row gap-4 text-lg'>
        {menuData.map((item) => (
          <MenuCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
