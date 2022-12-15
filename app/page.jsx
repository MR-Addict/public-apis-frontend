import entriesData from "./config";
import { RiShareBoxLine } from "react-icons/ri";

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
      <div className='flex flex-row items-center justify-between'>
        <span style={{ backgroundColor: "#B3FFAE" }} className='p-1 rounded-md'>
          {item.HTTPS ? "Https" : "Http"}
        </span>
        <span style={{ backgroundColor: "#82C3EC" }} className='p-1 rounded-md'>
          {item.Cors === "no" ? "NoCors" : "Cors"}
        </span>
        <span style={{ backgroundColor: "#ADA2FF" }} className='p-1 rounded-md'>
          {item.Category}
        </span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      {entriesData.entries
        .filter((item) => item.Category === "Animals")
        .map((item) => (
          <EntryCard item={item} key={item.API} />
        ))}
    </div>
  );
}
