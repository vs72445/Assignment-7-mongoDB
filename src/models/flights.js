
const mongoose = require('mongoose');

//defining schema
const flightSchema = new mongoose.Schema({
    //flightFromCreateFlight: { type:mongoose.Schema.Types.ObjectId, ref: 'flights' },
    flightNo: {
        type: String,
        unique: true,
        required: true
    },
    travelBtwCities: {
        type: String,
        required: true
    },
    flightTimmings: {
        type: String,
        required: true
    },
    planeCategory: {
        type: String,
        required: true
    }
});


const FlightModel = mongoose.model("Flights", flightSchema);

module.exports = FlightModel;