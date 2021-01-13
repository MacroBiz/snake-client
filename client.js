const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  
  conn.setEncoding('utf8');

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    console.log('Macro Successfully connected to game server');
    conn.write("Name: Macro");
  });
  return conn;
};

module.exports = connect;



////////////// VASILIY LESSON /////////////

// const name = "marco";
// const stdin = process.stdin;
// const net = require('net');
// // localhost
// // ip
// const client = net.createConnection({
//     host: '135.23.222.131',
//     port: 3001
// });
// stdin.setEncoding('utf8');
// client.setEncoding('utf8');
// client.write(`its me ${name}`, );
// stdin.on('data', (input) => {
//     client.write(`${name}: ${input}`);
// })
// // on('data') --- do something, when Data got recieved
// client.on('data', (data) => {
//     console.log(data);
// });