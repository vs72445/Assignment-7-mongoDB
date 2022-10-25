
const express = require('express');
const router = express.Router();
const FlightController = require('../controllers/flightCont.js')

// routers to get and post the info of flghts and tickets...
// add flight to db...
 router.post('/add_flight', FlightController.createFlight);

// all flight presents in db...
 router.get('/get_flights', FlightController.flightDetails);

// book flight ticket and post it in db...
 router.post('/book_ticket', FlightController.bookFlight);

//  get the flight ticket from db...
 router.get('/get_ticket', FlightController.ticketDetails);  

module.exports = router;