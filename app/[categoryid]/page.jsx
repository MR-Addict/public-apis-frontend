import { Table } from "../../components";

export default async function Page({ params: { categoryid } }) {
  const decoded_categoryid = decodeURIComponent(categoryid);
  return <Table categoryid={decoded_categoryid} />;
}
