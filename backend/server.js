const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const dbConfig = require('./database/db')

//Express route
const studentRoute = require('../backend/routes/student.route')

//connecting to mongodb
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/students', studentRoute)


//Port
const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Listenign on port ${port}`)
})


// // 404 Error
// app.use((req, res, next) => {
//     next(createError(404));
//   });
  
//   app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
//   });