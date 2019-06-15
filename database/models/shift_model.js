const mongoose = require("mongoose");
const ShiftSchema = require("./../schemas/shift_schema");
const ShiftModel = mongoose.model("shift", ShiftSchema);

module.exports = ShiftModel;