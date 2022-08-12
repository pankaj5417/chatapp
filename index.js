const express = require('express');
const app = express();
const server = require('http').createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);
const PORT=8000
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
//   });
//   io.on('connection', (socket) => {
//     socket.broadcast.emit('hi');
//   });

  io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
  });
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});