import readJson from "../../lib/readJson";
import RandomCard from "./RandomCard";

export default async function Page() {
  const entriesData = await readJson("entries.json");
  const entries = entriesData.entries;
  const entityLength = entries.length;
  return (
    <div className='w-full h-full flex flex-col items-center justify-start gap-3'>
      <div className='flex flex-col items-center gap-3 mt-5 md:mt-40'>
        <div className='text-2xl md:text-3xl font-bold text-slate-700 flex flex-row items-center gap-3'>
          <span>Total</span>
          <h1 className='italic text-3xl px-2 bg-purple-600 text-white rounded-md'>{entityLength}</h1>
          <span>available!</span>
        </div>
        <p className='text-slate-600 text-lg'>Click to Find A Random API</p>
      </div>
      <RandomCard />
    </div>
  );
}
