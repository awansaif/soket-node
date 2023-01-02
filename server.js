const express = require("express");
const app = express();
const http = require("http");
var cors = require("cors");
const httpServer = http.createServer(app);

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(
  cors({
    origin: "*",
  })
);
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

httpServer.listen(port, () => {
  console.log(`listening on *: ${port}`);
});
