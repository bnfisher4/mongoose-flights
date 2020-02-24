const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        max: 9999,
        min: 10
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const year = date.getFullYear() + 1;
            const newDate = date.setFullYear(year);
            return newDate;
        },
    },
});

module.exports = mongoose.model('Flight', flightSchema);