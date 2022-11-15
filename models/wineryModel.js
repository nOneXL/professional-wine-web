import * as mongoose from "mongoose";

const winerySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Winery name required!']
    },
    country: {
        type: String,
        required: [true, 'Winery country required!'],
    },
    coordinates: {
        lon: {
            type: mongoose.Types.Decimal128,
            required: [true, 'Winery longitude required!'],
            validate: {
                validator: function(v) {
                    return ((v >= -180) && (v <= 180) ? true : false);
                },
                message: props => `${props.value} is not a valid longitude!`
              }
        },
        lat: {
            type: mongoose.Types.Decimal128,
            required: [true, 'Winery latitude required!'],
            validate: {
                validator: function(v) {
                    return ((v >= -90) && (v <= 90) ? true : false);
                },
                message: props => `${props.value} is not a valid latitude!`
              }
        }
    },
    website: {
        type: String,
        required: [true, 'Winery website required!'],
        validate: {
            validator: function(v) {
                const reHttps = new RegExp('https://');
                const reCom = new RegExp('.com');
                return (v.match(reHttps)) && (v.match(reCom));
            },
            message: props => `${props.value} is not a valid website!`
          }
    }
})

const Winery = mongoose.model("Winery", winerySchema)

export { Winery };