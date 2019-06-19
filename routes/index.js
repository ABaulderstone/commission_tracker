const express = require("express");
const router = express.Router();
const shiftRoutes = require("./shift_routes")
const PageController = require("./../controllers/page_controller")

router.get("/", PageController.index);
router.use("/shifts", shiftRoutes);
module.exports = router;