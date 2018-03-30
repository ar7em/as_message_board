const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const port = 3000;

app.use(express.static("dist"));

io.on("connection", function(socket){
  console.log("a user connected");

  socket.on("disconnect", function(){
    console.log("user disconnected");
  });

  socket.on("chat message", function(msg){
    console.log("message: " + JSON.stringify(msg));
    io.emit("chat message", msg);
  });
});

server.listen(port, function(){
  console.log(`listening on *:${port}`);
});
