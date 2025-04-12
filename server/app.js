const express = require('express');
const http = require('http');
const Server = require('socket.io').Server;
const Connection = require('./db');
const app = express();
const server = http.createServer(app);
const Chat = require('./model/message');
const dotenv = require('dotenv').config();
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

Connection();

io.on("connection", (socket) => {
  console.log("connected");

  const loadMessages = async () => {
      try {
          const messages = await Chat.find().sort({timeStamp : 1}).exec();
          socket.emit('chat', messages)
      } catch(err) {
          console.log(err)
      }
  }
  loadMessages();

  socket.on('newMessage', async (msg) => {
      try {
          const newMessage = new Chat(msg)
          await newMessage.save()
          io.emit('message', msg)
      }catch(err) {
          console.log(err)
      }
  })

  socket.on("disconnect", () => {
      console.log("disconnect")
  })
})

app.get('/', (req, res) => {
    res.send("Hello World!")
})


server.listen(process.env.PORT, () => {
    console.log('listening on *:3000');
})