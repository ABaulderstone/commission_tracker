const express = require("express");
const router = express.Router();
const shiftRoutes = require("./shift_routes")

router.use("/shifts", shiftRoutes);
module.exports = router;