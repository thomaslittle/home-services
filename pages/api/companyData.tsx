import { promises as fs } from "fs";

export default async function handler(req, res) {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const companies = JSON.parse(file);
  res.status(200).json({ companies });
}
