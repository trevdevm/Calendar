const mongoose = require('mongoose');

const day = new mongoose.Schema({
    date: Date,
    time: Array,
    available: Boolean
})

var Day = mongoose.model('day', day);

module.exports = Day;