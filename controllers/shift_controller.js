const ShiftModel = require("./../database/models/shift_model");

async function index(req, res) {
    let shifts = await ShiftModel.find();
    res.render("shifts/index", {shifts});
}

async function create(req, res) {
    let shift = await ShiftModel.create()
    .catch(err => res.status(500).send(err));

    res.redirect("/shifts");

}