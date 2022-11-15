import * as mongoose from "mongoose";

const wineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Wine name required!']
    },
    country: {
        type: String,
        required: [true, 'Wine country required!']
    },
    region: {
        type: String,
        required: [true, 'Wine region required!']
    },
    winery: {
        type: String,
        required: [true, 'Wine winery required!']
    },
    grapes: [{type: String, required: [true, 'Wine grapes required!']}],
    type: {
        type: String,
        required: [true, 'Wine name required!']
    },
    year: {
        type: Number,
        required: [true, 'Wine year required!'],
        validate: {
            validator: (v) => (v >= 0),
            message: props => `${props.value} is not a valid year!`
        }
    },
    rate: {
        type: mongoose.Types.Decimal128,
        required: [true, 'Wine rate required!'],
        validate: {
            validator: (v) => ((v >= 1) && (v <= 5)),
            message: props => `${props.value} is not a valid rate!`
        }
    },
    offers: [{
        user: {
            type: String
        },
        price: {
            type: mongoose.Types.Decimal128,
            validate: {
                validator: (v) => (v >= 0),
                message: props => `${props.value} is not a valid price!`
            }
        },
        website: {
            type: String,
            validate: {
                validator: function(v) {
                    const reHttps = new RegExp('https://');
                    const reCom = new RegExp('.com');
                    return (v.match(reHttps)) && (v.match(reCom));
                },
                message: props => `${props.value} is not a valid website!`
              }
        }
    }]
})

const Wine = mongoose.model('Wine', wineSchema)

export { Wine };