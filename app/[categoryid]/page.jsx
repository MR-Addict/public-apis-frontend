import Table from "./Table";
import readJson from "../../lib/readJson";

export default async function Page({ params: { categoryid } }) {
  const decoded_categoryid = decodeURIComponent(categoryid);
  return <Table categoryid={decoded_categoryid} />;
}

export async function generateStaticParams() {
  const categoriesData = await readJson("categories.json");
  return categoriesData.categories.map((category) => ({
    categoryid: category,
  }));
}
