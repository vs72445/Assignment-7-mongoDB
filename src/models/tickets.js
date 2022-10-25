
const mongoose = require('mongoose');

//defining schema for tickets
const ticketSchema = new mongoose.Schema({
    fullName: { 
        type: String,
        required: true 
    },
    destination: { 
        type: String,
        required: true 
    },
    flightNo: { 
        type: String,
        required: true 
    },
    travelBtwCities: {
        type: String,
        // required: true 
    },
    flightTimmings: {
        type: String,
        // required: true 
    },
    planeCategory: {
        type: String,
        // required: true 
    }
});


const TicketModel = mongoose.model("Tickets", ticketSchema);

module.exports = TicketModel;