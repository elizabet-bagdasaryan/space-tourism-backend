import { techData } from "../models/technology.js";

const getTech = async (req, res) => {
  try {
    const { name } = req.params;
    const technology = await techData.findOne({ name });
    res
      .status(200)
      .json({ message: "Data retrieved successfully", technology });
  } catch (error) {
    res.status(500).json({ message: "Erorr", err: error });
  }
};

export default getTech;
