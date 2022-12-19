import readJson from "../../lib/readJson";
import { EntryCard } from "../../components";

export default async function Page({ params: { categoryid } }) {
  const entriesData = await readJson("entries.json");
  const decoded_categoryid = decodeURIComponent(categoryid);
  const entries = entriesData.entries.filter((item) => item.Category === decoded_categoryid);
  return (
    <div>
      <h1 className='font-bold text-3xl pl-2 pb-2'>
        {decoded_categoryid}({entries.length})
      </h1>
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3'>
        {entries.map((item, index) => (
          <EntryCard item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const categoriesData = await readJson("categories.json");
  return categoriesData.categories.map((category) => ({
    categoryid: category,
  }));
}
