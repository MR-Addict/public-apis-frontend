import fs from "fs";
import path from "path";

async function fetchJson(api) {
  const res = await fetch(`https://api.publicapis.org/${api}`);
  if (!res.ok) return;
  const jsonData = await res.json();
  const jsonDir = path.join(process.cwd(), "data");
  const fullPath = path.join(jsonDir, `${api}.json`);
  fs.writeFileSync(fullPath, JSON.stringify(jsonData, null, 4));
}

console.log("fetching data");
await Promise.all([fetchJson("categories"), fetchJson("entries")]);
console.log("Done");
