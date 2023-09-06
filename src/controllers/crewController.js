import CrewData from "../models/crew.js";

const getCrew = async (req, res) => {
	try {
		const { name } = req.params;
		const crew = await CrewData.findOne({ name });
		res.status(200).json({ message: "Data retrieved successfully", crew });
	} catch (error) {
		res.status(500).json({ message: "Erorr", err: error });
	}
};

export default getCrew;
