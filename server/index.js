const http = require("http");
const path = require("path");
const express = require("express");

const app = express();
const port = 3000;
const httpServer = http.Server(app);

app.get("/", function(req, res){
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

httpServer.listen(port, function(){
  // eslint-disable-next-line no-console
  console.log(`listening on *:${port}`);
});
