const express = require("express");
const dotenv = require("dotenv");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const authMiddleWare = require("./server/authentication").authentication;
const tasksRoutes = require("./server/tasks/TaskRoutes");
const usersRoutes = require("./server/users/UserRoutes");
const sessionRoutes = require("./server/session/SessionRoute");

dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log(`Database connected`);
});

app.use(bodyParser.json());
app.use(express.static("public"));
app.use(usersRoutes);
app.use(sessionRoutes);
app.use(tasksRoutes);

app.get("/ping", function(req, res) {
  return res.send("pong");
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public"));
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server listening on port ${port}!`)
);
