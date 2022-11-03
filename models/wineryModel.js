import * as mongoose from "mongoose";

const winerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    coordinates: {
        lon: {
            type: mongoose.Types.Decimal128,
            required: true
        },
        lat: {
            type: mongoose.Types.Decimal128,
            required: true
        }
    },
    website: {
        type: String,
        required: true
    }
})

const Winery = mongoose.model("Winery", winerySchema)

export { Winery };