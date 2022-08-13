const { User, Thought } = require("../models");

const userController = {
	// need the following methods  getSingleUser,  updateUser, deleteUser, addFriend, deleteFriend
	getAllUser(req, res) {
		User.select("-__v")
			.find()
			.then((userData) => {
				res.json(userData);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	createUser(req, res) {
		User.create(req.body)
			.then((userData) => {
				res.json(userData);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	getSingleUser(req, res) {
		User.findOne({ _id: req.prams.userId })
			.select("-__v")
			.populate("friends")
			.populate("thoughts")
			.then((userData) => {
				!userData
					? res.status(404).json({ message: "No user found by that id" })
					: res.json(userData);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	updateUser(req, res) {
		User.findOneAndUpdate(
			{ _id: req.params.userId },
			{ $set: req.body },
			{ runValidators: true, new: true }
		)
			.then((user) =>
				!user
					? res.status(404).json({ message: "No user with that ID" })
					: res.json(user)
			)
			.catch((err) => res.status(500).json(err));
	},
	deleteUser(req, res) {
		User,
			findOneAndDelete({ _id: req.prams.userId })
				.than((user) => {
					!user
						? res.status(404).json({ message: "No user found by that id" })
						: res.json(userData);
				})
				.catch((err) => {
					res.json(err);
				});
	},
};

module.exports = userController;
