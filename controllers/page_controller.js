const ShiftModel = require("./../database/models/shift_model");
const calculate = require("./../utils/calcuation_functions");

async function index(req, res) {
    let shifts = await ShiftModel.find();
    let avgShiftTotal = calculate.averageShiftTotal(shifts);
    res.render("pages/index", {shifts, avgShiftTotal});
}

 async function dashboard(req, res) { 
    const user = req.user;
    let shifts = await ShiftModel.find({user: user._id});
    let avgShiftTotal = calculate.averageShiftTotal(shifts);
    res.render("pages/dashboard", {shifts, avgShiftTotal, user});
}



module.exports = {
    index,
    dashboard
}