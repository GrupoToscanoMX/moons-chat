const express = require("express");
var cors = require("cors");
const socket = require("socket.io");

// APP setup
const PORT = 5000;
const app = express();

// Express middleware
app.use(cors());

const server = app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// Socket setup
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  socket.on("sendMessage", (message, callback) => {
    io.emit("message", { user: message.username, text: message.message });

    callback();
  });
});
