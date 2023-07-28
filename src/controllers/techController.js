import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getTech = (req, res) => {
  try {
    const { name } = req.params;
    const dataFilePath = path.join(__dirname, "../data.json");
    const rawData = fs.readFileSync(dataFilePath);
    const data = JSON.parse(rawData);

    const technology = data.technology.find(
      (technology) => technology.name === name
    );

    if (!technology) {
      res.status(404).json({ message: "Technology not found" });
    } else {
      res
        .status(200)
        .json({ message: "Data retrieved successfully", technology });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    res.status(500).json({ message: "Error", err: error });
  }
};

export default getTech;
