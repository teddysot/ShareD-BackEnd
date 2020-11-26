const passport = require("passport");
const { login, register, getUserById, verifyUser, sendOTP } = require("../controllers/user");
const router = require("express").Router();

const auth = passport.authenticate("jwt-auth", { session: false });

router.post("/login", login);
router.post("/register", register);
router.get("/verify", verifyUser);
router.get("/send-email", sendOTP)
router.get("/:userId", auth, getUserById);

module.exports = router;