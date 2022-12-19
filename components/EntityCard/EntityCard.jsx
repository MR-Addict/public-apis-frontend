import { RiShareBoxLine } from "react-icons/ri";

export default function EntityCard({ item }) {
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
