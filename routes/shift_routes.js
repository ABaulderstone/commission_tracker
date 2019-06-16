const express = require("express");
const router = express.Router();
const ShiftController = require("./../controllers/shift_controller");
const SaleController = require("./../controllers/sale_controller")

router.get("/", ShiftController.index);

router.post("/", ShiftController.create);

module.exports = router;