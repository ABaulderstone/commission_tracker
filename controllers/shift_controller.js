const ShiftModel = require("./../database/models/shift_model");

async function index(req, res) {
    let shifts = await ShiftModel.find();
    res.render("shifts/index", {shifts});
}