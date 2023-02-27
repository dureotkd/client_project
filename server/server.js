const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const { addUser, getUser, getUsersInRoom } = require('./users.js')

require('dotenv').config();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  },
});

io.on('connection', socket => {
  console.log("new connection !!");

  socket.on('join_room', (username, room) => {

    // say user joined
    socket.emit('message', {
      user: 'admin',
      text: `${username} has joined the room ${room}`
    })

    socket.broadcast.to(room).emit('message', {
      user: 'admin',
      text: `${username} has joined the room ${room}`
    })

    socket.join(room);
  })

  socket.on('generate_game', (room, matrix) => {
    console.log(room, matrix);
    socket.broadcast.to(room).emit('send_game', matrix);
    console.log(room, matrix);
  })

  socket.on('send_message', (data) => { 
    io.to(data.room).emit("receive_message", data);
  })

  socket.on('disconnect', () => {
    console.log(socket.id, " is disconnected");
  });
});


server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

