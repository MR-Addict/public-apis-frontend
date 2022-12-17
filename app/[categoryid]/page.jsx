import { Table } from "../../components";
import categoriesData from "../../components/Sidebar/config";

export default async function Page({ params: { categoryid } }) {
  const decoded_categoryid = decodeURIComponent(categoryid);
  return <Table categoryid={decoded_categoryid} />;
}

export async function generateStaticParams() {
  return categoriesData.categories.map((category) => ({
    categoryid: category,
  }));
}
