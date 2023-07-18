const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://gavaskar:V.gu2PSzC7cLWLa@cluster0.9lt2ej0.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection;

db.on('error',console.error.bind(console,"error in connecting database"));

db.once('open',function(){
    console.log('MongoDb connected Succesfully!');
});
module.exports = db;