const express = require('express') // Import the Express... which simplifies handling HTTP requests and routing

//import the custom router for root route
const indexRouter = require('./routes/index')

//initial the express application
const app = express()

//use the indexrouter for handling req
app.use('/', indexRouter)

//start the server and listen
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Server running on port', server.address().port)
})