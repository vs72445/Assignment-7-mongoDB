
 const express = require('express');
 const connectDB = require('./db/connection.js');
 const routes = require('./routers/route.js')


const app = express();
const port = process.env.PORT || '5000';
const database_url =  process.env.database_url || "mongodb://localhost:27017"; 


app.listen(port,() =>{
     console.log("Server is Running on", port); 
});

//database
connectDB(database_url);

//reading json 
app.use(express.json());

//loading routes
app.use('/flights', routes);

