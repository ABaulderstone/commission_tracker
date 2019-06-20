const express = require("express");
const router = express.Router();
const passport = require("passport");
const shiftRoutes = require("./shift_routes");
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");

router.get("/", PageController.index);
router.get("/dashboard", PageController.dashboard)

router.get("/sign_up", AuthenticationController.registerNew);

router.post("/sign_up" ,AuthenticationController.registerCreate);
router.get("/logout", AuthenticationController.logout);
router.get("/login", AuthenticationController.loginNew);

router.post("/login", passport.authenticate("local", {
    failureRedirect: "/login"
}),
AuthenticationController.loginCreate)

router.use("/shifts", passport.authenticate("jwt", { session: false }), shiftRoutes);
module.exports = router;