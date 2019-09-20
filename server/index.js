const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`, {
        useNewUrlParser: true, 
        dbName: 'kanban'
    },
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`We're connected`);
});

app.use(bodyParser.json());
app.use(express.static('public'))

// app.use your ROUTES

app.listen(port, () => console.log(`Example app listening on port ${port}!`))