const mongoose = require('mongoose');

const day = new mongoose.Schema({
    date: Date,
    time: Array
})

var Day = mongoose.model('day', day);

module.exports = Day;