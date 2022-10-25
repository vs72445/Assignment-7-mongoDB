
const FlightModel = require('../models/flights.js');
const TicketModel = require('../models/tickets.js');


class FlightController {
    // creating flight to add in db...
    static createFlight = async (req, res) => {
        try {
            const { flightNo, travelBtwCities, flightTimmings, planeCategory } = req.body
            const check = await FlightModel.findOne({ flightNo: flightNo })

            if (check) {
                res.send("Plane already exists, add a different flight.");
            } else {
                const doc = new FlightModel({
                    flightNo: flightNo,
                    travelBtwCities: travelBtwCities,
                    flightTimmings: flightTimmings,
                    planeCategory: planeCategory
                });

                const result = await doc.save();
                res.send(result);
            }
        }
        catch (error) {
           // console.log(error);
           res.send(error)
        }
    }

    // fetch all flight details from the db...
    static flightDetails = async (req, res) => {
        try {
            const result = await FlightModel.find();
            console.log(res);
            res.status(200).send(result);
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }

    // booking flight ticket and post it in db...
    static bookFlight = async (req, res) => {
        try {
            const {fullName, destination, flightNo, travelBtwCities, flightTimmings, flightCategory} = req.body
            // finding flight with flightNo...
            const check = await FlightModel.findOne({ flightNo: flightNo })
            // conditions of checking flight is present or not...
            if (check) {
                const doc = new TicketModel({
                    fullName: fullName,
                    destination: destination,
                    flightNo: check.flightNo,
                    travelBtwCities: check.travelBtwCities,
                    flightTimmings: check.flightTimmings,
                    planeCategory: check.planeCategory
                });
                const result = await doc.save();
                //res.send(result);
                res.send(`${fullName}, Your ticket is successsfully booked for ${result.travelBtwCities} at ${result.flightTimmings} for tomorrow.`);
            }
            else {
                res.send("Plane does not exist.");
            }
        } catch (error) {
            console.log(error)
            res.send(error)
        }
        
    }

    // fetch ticket details from the db...
    static ticketDetails = async (req, res) => {
        try {
            const result = await TicketModel.find();
            console.log(result);
            res.send(result);
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    }
}


module.exports = FlightController;