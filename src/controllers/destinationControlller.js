import { destinationData } from "../models/destination.js";

const getDestination = async (req, res) => {
  try {
    const { name } = req.params;
    const destination = await destinationData.findOne({ name });
    res.status(200).json({ message: "Data retrieved successfully", crew });
  } catch (error) {
    res.status(500).json({ message: "Erorr", err: error });
  }
};

export default getDestination;
