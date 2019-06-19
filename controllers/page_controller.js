const ShiftModel = require("./../database/models/shift_model");
const calculate = require("./../utils/calcuation_functions");

async function index(req, res) {
    let shifts = await ShiftModel.find();
    console.log(shifts[0].date.get());
    let avgShiftTotal = calculate.averageShiftTotal(shifts);
    res.render("pages/index", {shifts, avgShiftTotal});
}



module.exports = {
    index
}