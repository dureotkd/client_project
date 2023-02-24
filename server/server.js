const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const { addUser, getUser, getUsersInRoom } = require('./users')

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
  console.log(`User Connected ${socket.id}`);

  socket.on('join_room', (data) => {
    socket.join(data);
  })

  socket.on('send_message', (data) => { 
    socket.to(data.room).emit("receive_message", data);
  })

  socket.on('disconnect', () => {
    console.log(socket.id, " is disconnected");
  });
});


server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

