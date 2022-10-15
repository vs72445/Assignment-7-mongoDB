const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/flights", {
    useNewUrlParser: true
// }, () => {
//     try {
//         console.log("Database is connected");
//     } catch (err) {
//         console.log("Database is not connected", err);
//     }
// });

}).then(() => {
    console.log("Connection sucessful");
}).catch((err) => {
    console.log("No connection", err);
});