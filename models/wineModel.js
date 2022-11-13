import * as mongoose from "mongoose";

const wineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    winery: {
        type: String,
        required: true
    },
    grapes: [{type: String, required: true}],
    type: {
        type: String,
        required:  true
    },
    year: {
        type: Number,
        required: true
    },
    rate: {
        type: mongoose.Types.Decimal128,
        required: true,
        min: 1,
        max: 5
    },
    offers: [{
        user: {
            type: String
        },
        price: {
            type: mongoose.Types.Decimal128,
        },
        website: {
            type: String
        }
    }]
})

const Wine = mongoose.model('Wine', wineSchema)

export { Wine };