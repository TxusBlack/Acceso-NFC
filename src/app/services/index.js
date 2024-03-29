const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('/dev/tty.usbmodemFA131', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

export function listen() {
  port.on('open', () => {
    console.log('Placa conectada');
    parser.on('data', data =>{
      console.log('UID Card:', data);
      return data;
    });
  })
}

export function prueba() {
  return 'Prueba';
}