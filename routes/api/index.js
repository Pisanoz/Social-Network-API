const router = require("express").Router();
const thoughts = require("./thoughtsRoute");
const users = require("./usersRoute");

router.use("thoughtRoute", thoughts);
router.use("usersRoute", users);

module.exports = router;
