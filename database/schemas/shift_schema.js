const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SaleSchema = require("./sale_schema")
const ShiftSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    date: {
        type: Date,
        required: true,
        default: Date
    },
    notes: {
        type: String, 
        required: false,
    },
    total: {
        type: Number, 
        required: true,
        default: 0

    }, 
    average: {
        type: Number,
        required: true,
        default: 0 
    },
    sales: [SaleSchema]

});

module.exports = ShiftSchema;