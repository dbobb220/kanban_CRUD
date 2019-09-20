const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dotenv = require('dotenv').config();
let db = null;


 
// change this to your mongodb atlas uri
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@aca-practice-bx4sb.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(url);
const dbName = 'kanban';

let areYouConnected = (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('Connected successfully to server')
}

// Use connect method to connect to the server
client.connect(areYouConnected, { useNewUrlParser: true })

exports.getDatabase = function() {
    return db;
}