import * as mongoose from "mongoose";

const winerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  coordinates: {
    lon: {
      type: mongoose.Types.Decimal128,
      required: true,
      min: -180,
      max: 180,
    },
    lat: {
      type: mongoose.Types.Decimal128,
      required: true,
      min: -90,
      max: 90,
    },
  },
  website: {
    type: String,
    required: true,
  },
});

const Winery = mongoose.model("Winery", winerySchema);

export { Winery };
