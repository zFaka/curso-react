const express = require('express');
const {dbConnection} = require('./database/config');
const cors = require('cors');
require('dotenv').config();



//console.log(process.env)



//Create express server
const app = express();



//Database
dbConnection()



//CORS
app.use(cors())



//Public Directory
app.use(express.static('public'))



//Lecture and Parsing of Body
app.use(express.json())



//Routes
app.use('/api/auth',   require('./routes/auth'))
app.use('/api/events', require('./routes/events'))



//Escuchar peticiones
app.listen(
    process.env.PORT, () => {
        console.log(`Server is running in ${process.env.PORT}`)})

