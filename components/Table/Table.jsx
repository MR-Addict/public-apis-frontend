import { RiShareBoxLine } from "react-icons/ri";

import entriesData from "./config";

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
      <div className='flex flex-row items-center justify-between gap-3'>
        <span style={{ backgroundColor: "#B3FFAE" }} className='p-2 rounded-md cursor-pointer'>
          {item.HTTPS ? "HTTPS" : "HTTP"}
        </span>
        <span style={{ backgroundColor: "#82C3EC" }} className='p-2 rounded-md cursor-pointer'>
          {item.Cors === "no" ? "NoCors" : "Cors"}
        </span>
        <span style={{ backgroundColor: "#ADA2FF" }} className='p-2 rounded-md cursor-pointer'>
          {item.Auth === "" ? "NoAuth" : "Auth"}
        </span>
      </div>
    </div>
  );
}

export default async function Table({ categoryid }) {
  const entries = entriesData.entries.filter((item) => item.Category === categoryid);
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
