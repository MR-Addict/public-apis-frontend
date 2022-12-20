import fs from "fs";
import path from "path";

export default async function readJson(fileName) {
  const jsonDir = path.join(process.cwd(), "data");
  const fullPath = path.join(jsonDir, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return JSON.parse(fileContents);
}
