const passport = require("passport");
const { getAllMenu } = require("../controllers/menu");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.get("/", auth, getAllMenu);

module.exports = router;