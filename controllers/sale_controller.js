const ShiftModel = require("./../database/models/shift_model");

async function create(req, res) {
    let { id } = req.params;
    let { amount, notes } = req.body;

    let shift = await ShiftModel.findById(id);
    shift.sales.push({amount, notes});

    await shift.save();

    res.redirect(`/shifts/${id}`);
}

module.exports = {
    create
}