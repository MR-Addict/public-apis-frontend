import readJson from "../../lib/readJson";
import { EntityCard } from "../../components";

export default async function Page({ params: { categoryid } }) {
  const decoded_categoryid = decodeURIComponent(categoryid);
  const entriesData = await readJson("entries.json");
  const entries = entriesData.entries.filter((item) => item.Category === decoded_categoryid);
  return (
    <div>
      <h1 className='font-bold text-3xl pl-2 pb-2'>
        {categoryid}({entries.length})
      </h1>
      <div className='grid gap-4 grid-cols-1 xl:grid-cols-3'>
        {entries
          .filter((item) => item.Category === categoryid)
          .map((item) => (
            <EntityCard item={item} key={item.API} />
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
