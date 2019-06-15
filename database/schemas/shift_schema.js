const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShiftSchema = new Schema({

    date: {
        type: Date,
        required: true,
        default: Date.now()
    },

});

module.exports = ShiftSchema;