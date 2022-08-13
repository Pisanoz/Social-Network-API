const router = require("express").Router();
const { getAllUser, createUser } = require("../../controllers/user-controller");

router.route("/").get(getAllUser).post(createUser);

router.route("/:userId").get().put().delete();

router.route("/:userId/friends/:friendId").post().delete();

module.exports = router;
