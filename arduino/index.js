// Express.js
var express = require('express');
var app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Arduino
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/tty.usbmodemFA131', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

let dataPlaca;

port.on('open', () => {
  console.log('Placa conectada');
  parser.on('data', data =>{
    console.log('UID Card:', data);
    dataPlaca = data;
  });
});

// Express.js
app.get('/', (req, res) => {
  if (dataPlaca) {
    res.status(200).json({
      message: dataPlaca
    });
  } else {
    res.status(200).json({
      message: 'No hay datos'
    });
  }
});

app.get('/clean', (req, res) => {
  dataPlaca = null;
  res.status(200);
});

app.listen(3000, function () {
  console.log('Listening on port 3000!');
});