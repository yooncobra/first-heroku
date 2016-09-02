var express = require("express");
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);

app.set("port", process.env.PORT || 3030);

app.get("/", function(req, res) {
  // res.type("text/plain");
  // res.send("This is chat server.");
  res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", function(socket) { // 소켓 키다
  /*
  console.log("a user connected");
  socket.on("disconnect", function() {
    console.log("a user disconnected");
  }) // disconnection code
  */
  socket.on("chat message", function(msg) {
    io.emit("chst message: ", msg);
  });
});


http.listen(app.get("port"), function() {
  console.log("Express chat server is running at localhost:" + app.get("port"));
});