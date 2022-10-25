
const mongoose = require('mongoose')

const connectDB = async (Database_URL) => {
    try {
        const db_options = {
            dbName: "flights",
        }
        await mongoose.connect(Database_URL, db_options);
        console.log("Database is Connected");
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;