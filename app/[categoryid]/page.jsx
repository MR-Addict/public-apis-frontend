import { Table } from "../../components";

export default async function Page({ params }) {
  const categoryid = decodeURIComponent(params.categoryid);
  return <Table categoryid={categoryid} />;
}
