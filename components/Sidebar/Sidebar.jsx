import Link from "next/link";

export async function fetchCategory() {
  const res = await fetch("https://api.publicapis.org/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  } else {
    const data = await res.json();
    console.log("Categories fetched!");
    return data.categories;
  }
}

export default async function Sidebar() {
  const categories = await fetchCategory();
  return (
    <div className='flex flex-col gap-2'>
      <div className='sticky top-0 left-0'>
        <h1 className='text-xl font-bold py-2'>Category</h1>
        <div className='w-[20vw] whitespace-nowrap overflow-auto max-h-[75vh] border-t-2 border-gray-700 flex flex-col'>
          {categories.map((item) => (
            <Link key={item} href={item} className='hover:bg-secondary-bg p-1 rounded-sm'>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
