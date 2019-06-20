const express = require("express");
const router = express.Router();
const ShiftController = require("./../controllers/shift_controller");
const SaleController = require("./../controllers/sale_controller");
const {celebrate, Joi, errors} = require("celebrate");
const passport = require("passport");

router.get("/", ShiftController.index);

router.post("/", ShiftController.create);

router.get("/new", ShiftController.make);

router.get("/:id", ShiftController.show)

router.post("/:id", celebrate({
    body: {
        amount: Joi.number().min(1).required(),
        notes: Joi.string().allow("").max(150)
    }
}), SaleController.create);

module.exports = router;