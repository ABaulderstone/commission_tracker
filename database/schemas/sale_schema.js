
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaleSchema = new Schema({
    
    amount: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
    
});

module.exports = SaleSchema;