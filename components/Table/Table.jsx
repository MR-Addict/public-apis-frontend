import { RiShareBoxLine } from "react-icons/ri";
import { fetchEntry } from "../../utils/api";

function EntryCard({ item }) {
  return (
    <div className='flex flex-col gap-2 bg-white shadow-md p-4 rounded-md justify-between'>
      <div>
        <div className='py-2 flex flex-row items-center justify-between'>
          <h1 className='text-xl font-bold'>{item.API}</h1>
          <a className='text-white bg-purple-400 p-2 rounded-full' href={item.Link} target='_blank'>
            <RiShareBoxLine />
          </a>
        </div>
        <p>{item.Description}</p>
      </div>
      <div className='flex flex-row items-center justify-between gap-2'>
        <span style={{ backgroundColor: "#B3FFAE" }} className='p-2 rounded-md'>
          {item.HTTPS ? "Https" : "Http"}
        </span>
        <span style={{ backgroundColor: "#82C3EC" }} className='p-2 rounded-md'>
          {item.Cors === "no" ? "NoCors" : "Cors"}
        </span>
        <span style={{ backgroundColor: "#ADA2FF" }} className='p-2 rounded-md whitespace-nowrap overflow-x-clip'>
          {item.Category}
        </span>
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
      <div className='grid grid-cols-3 gap-4'>
        {entries
          .filter((item) => item.Category === categoryid)
          .map((item) => (
            <EntryCard item={item} key={item.API} />
          ))}
      </div>
    </div>
  );
}
