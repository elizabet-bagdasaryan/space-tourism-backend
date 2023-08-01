import { Schema, model } from "mongoose";

const technology = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  images: {
    portrait: {
      type: Schema.Types.String,
      required: true,
    },
    landscape: {
      type: Schema.Types.String,
      required: true,
    },
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
});

const technologyData = model("technology", technology);

export default technologyData;


