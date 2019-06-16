const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SaleSchema = require("./sale_schema")
const ShiftSchema = new Schema({

    date: {
        type: Date,
        required: true,
        default: Date.now()
    },
    notes: {
        type: String, 
        required: false,
    },
    sales: [SaleSchema]

});

module.exports = ShiftSchema;