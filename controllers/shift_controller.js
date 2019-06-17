const ShiftModel = require("./../database/models/shift_model");
const calculate = require("./../utils/calcuation_functions");

async function index(req, res) {
    let shifts = await ShiftModel.find();
    res.render("shifts/index", {shifts});
}

async function create(req, res) {
    let {notes} = req.body;
    let shift = await ShiftModel.create({notes})
    .catch(err => res.status(500).send(err));

    res.redirect("/shifts");

}
function make(req, res){
    res.render("shifts/new");

}

async function show (req, res) {
    let {id} = req.params;
    let shift = await ShiftModel.findById(id);
    let total = calculate.shiftTotal(shift.sales);
    let average = calculate.shiftAverage(shift.sales, total);


    res.render("shifts/show", { shift, total, average });
}

module.exports = {
    index,
    create,
    make,
    show
}