import menuData from "./config";
import Link from "next/link";

function MenuCard({ item }) {
  return (
    <Link
      href={item.href}
      className='flex flex-row items-center text-xl gap-2 border-b-2 border-gray-700 border-opacity-0 hover:border-opacity-100'
    >
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </Link>
  );
}

export default function Navbar() {
  return (
    <div className='px-5 md:px-48 py-5 shadow-lg bg-secondary-bg flex flex-row items-center justify-between'>
      <Link href='/' className='font-bold text-2xl whitespace-nowrap'>
        Public APIs
      </Link>
      <div className='flex flex-row gap-4 text-lg'>
        {menuData.map((item) => (
          <MenuCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
