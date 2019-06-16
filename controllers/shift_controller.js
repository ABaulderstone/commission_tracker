const ShiftModel = require("./../database/models/shift_model");

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
    let total = 0;
    shift.sales.forEach( value => {
        total += value.amount;
    });
    let average = total / shift.sales.length || 0;


    res.render("shifts/show", { shift, total, average });
}

module.exports = {
    index,
    create,
    make,
    show
}