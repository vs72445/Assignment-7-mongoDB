const express = require("express");
const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    flightNo: {
        type: String,
        required: true,
        unique: true
    },
    travel_btw_cities: {
        type: String,
        required: true,
        trim: true
    },
    flight_timmings: {
        type: String,
        required: true,
        trim: true
    },
    planeCategory: {
        type: String,
        required: true,
        trim: true
    }
})

// creating a new collection...
const FlightDetails = new mongoose.model("FlightDetail", flightSchema);

module.exports = FlightDetails;