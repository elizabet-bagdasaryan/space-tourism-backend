import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCrew = (req, res) => {
  try {
    const { name } = req.params;
    const dataFilePath = path.join(__dirname, "../data.json");
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);

    const crew = data.crew.find((crew) => crew.name === name);

    if (!crew) {
      res.status(404).json({ message: "Crew member not found" });
    } else {
      res.status(200).json({ message: "Data retrieved successfully", crew });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Error", err: error });
  }
};
export default getCrew;
