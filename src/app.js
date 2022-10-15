const express = require("express");
require("../src/db/connection");
const FlightDetails = require("../src/models/flights")

const app = express();
const port = process.env.PORT || 5000;

// reading the json data through express...
app.use(express.json());

// home page of the app...
app.get("/", async (req, res) => {
    res.send("Welcome to Air India");
})


// handling post request...
app.post("/flights", async (req, res) => {
    try {
        const addingFlightDetails = new FlightDetails(req.body)
        // console.log(req.body);
        const insertFlightDetails = await addingFlightDetails.save();
        console.log(insertFlightDetails);
        res.send("Details posted");
    } catch (err) {
        console.log(err);
        res.send("Error in posting data", err);
    }
})


// handing get request...to fetch flight data with reference id(flight no.)
app.get('/fetch/:id', (req, res) => {
    const fetchId = req.params.id;
    FlightDetails.find(({ flightNo: fetchId }), (err, val) => {
        if (err) {
            console.log(err);
            res.send("error")
        } else {
            // console.log("line no 40");
            // it means there is nothing in the response body in braces...
            if (val.length == 0) {
                // console.log("line no 43");
                res.send("Data does not exist.")
            } else {
                // console.log("line no 46");
                res.send(val)
            }
        }
    })
});



app.listen(port, () => {
    console.log(`Connection is live at port no. ${port}`);
})