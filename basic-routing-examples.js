const express = require('express')
const app = express()

// Respond with Hello World! on the homepage
app.get('/', function (req, res) {
	res.send('Hello World!')
})

// Respond to POST request on the root route (/), the application's home page
app.post('/', function (req, res) {
	res.send('Got a POST request')
})

// Respond to a GET request to ther /user route
app.get('/user', function (req, res) {
	res.send('Got a GET request at /user')
})

// Respond to a PUT request to the /user route
app.put('/user', function (req, res) {
	res.send('Got a PUT request at /user')
})

// Respond to a DELETE request to the /user route
app.delete('/user', function (req, res) {
	res.send('Got a DELETE request at /user')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))