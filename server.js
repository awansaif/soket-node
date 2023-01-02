const express = require("express");
const app = express();
const http = require("http");
var cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
saifurre;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => {
  console.log(`listening on *: ${port}`);
});
