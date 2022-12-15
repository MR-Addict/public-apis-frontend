import { RiShareBoxLine } from "react-icons/ri";

import { fetchEntry } from "../../utils/api";

function StatusCard({ status, title }) {
  return (
    <span
      style={{ backgroundColor: status ? "#B3FFAE" : "#FF597B" }}
      className='p-2 px-3 rounded-md relative cursor-pointer'
    >
      {title}
    </span>
  );
}

function EntryCard({ item }) {
  return (
    <div className='flex flex-col gap-2 bg-white shadow-md p-4 rounded-md justify-between overflow-x-auto'>
      <div>
        <div className='py-2 flex flex-row items-center justify-between'>
          <h1 className='text-xl font-bold'>{item.API}</h1>
          <a className='text-white bg-purple-400 p-2 rounded-full' href={item.Link} target='_blank'>
            <RiShareBoxLine />
          </a>
        </div>
        <p>{item.Description}</p>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <StatusCard status={item.HTTPS === true} title='HTTPS' />
        <StatusCard status={item.Cors === "no"} title='Cors' />
        <StatusCard status={item.Auth === ""} title='Auth' />
      </div>
    </div>
  );
}
export default async function Table({ categoryid }) {
  const msg = await fetchEntry();
  let entries = msg.data;
  if (categoryid !== "All") entries = msg.data.filter((item) => item.Category === categoryid);
  return (
    <div>
      <h1 className='font-bold text-3xl pb-4'>
        {categoryid}({entries.length})
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 xl:grid-cols-3'>
        {entries
          .filter((item) => item.Category === categoryid)
          .map((item) => (
            <EntryCard item={item} key={item.API} />
          ))}
      </div>
    </div>
  );
}
