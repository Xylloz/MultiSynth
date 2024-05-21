const express = require("express");
const path = require("path");
const { PasteClient } = require("pastebin-api");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
});

const client = new PasteClient(process.env.PASTE_API_KEY);

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../client")));

const PORT = process.env.PORT;

// Server Index
app.use("/build", express.static(path.join(__dirname, "../client/dist")));

// Pastebin API
app.post("/paste", async (req, res) => {
  try {
    const synthJSON = req.body;
    console.log("User synthJSON Data: ", synthJSON);

    const url = await client.createPaste({
      code: JSON.stringify(synthJSON),
    });

    console.log("url: ", url);

    return res.status(200).json({ url });
  } catch (err) {
    return res.status(500).send(err);
  }
});

io.on("connection", (socket) => {
  // New connection
  console.log("a user connected");
  // Chat Message
  socket.on("chat message", (user, msg) => {
    console.log(`${user} says ${msg}`);
    socket.broadcast.emit("chat message", user, msg);
  });
  // Button Click
  socket.on("keydown", (note) => {
    console.log(`${socket.id} has pressed ${note}`);
    socket.broadcast.emit("keydown", socket.id, note);
  });
  socket.on("keyup", (note) => {
    console.log(`${socket.id} has released ${note}`);
    socket.broadcast.emit("keyup", socket.id, note);
  });
  // Disconnect
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

// Listening on env port
server.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
