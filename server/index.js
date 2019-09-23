const express = require('express');
const dotenv = require('dotenv');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const tasksRoutes = require('./routes/tasks');

dotenv.config()

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));
app.use(tasksRoutes);

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${port}!`));
 
mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/${process.env.DB_DB}?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`We're connected`);
});
