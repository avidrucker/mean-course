const http = require('http');
const app = require('./backend/app');

const port = process.env.PORT || 3000;
app.set('port',port); // tell Express which port to use
const server = http.createServer(app); // use app as a listener for incoming requests

server.listen(port); //start the listener
