const express = require('express')
const app = express()
const fs = require('fs')
const formidable = require('formidable')
const grpc = require('grpc')
const PROTO_PATH = __dirname + '/helloworld.proto'
const hello_proto = grpc.load(PROTO_PATH).helloworld;

// Respond with index.html on the homepage
app.get('/', function (req, res) {
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'})
		res.write(data)
		res.end()
	})
})

// Respond to POST method sayHello on the homepage
app.post('/sayHello', function (req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields) {
		res.write('Number of entries: ' + fields['length'] + '\n');
		for(i = 0; i < fields['length']; ++i) {
			res.write('title: ' + fields['title[]'][i].toString());
			res.write(', ');
			res.write('message: ' + fields['message[]'][i].toString());
			res.write('\n');
		}
		res.end()
	})
})

app.listen(3000, () => console.log('my-first-express-js listening on port 3000!'))