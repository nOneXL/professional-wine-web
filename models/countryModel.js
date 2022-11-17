import * as mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    code: {
        type: String,
        required: true, 
        minLength: 2,
        maxLength: 2,
    }
})

const Country = mongoose.model('Country', countrySchema)

export { Country };