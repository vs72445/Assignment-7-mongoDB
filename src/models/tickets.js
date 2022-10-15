
const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    passengerNo: {
        type: Number,
        required: true,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    }
})
const Tickets = mongoose.model("Ticket", ticketSchema)

module.exports = Tickets;