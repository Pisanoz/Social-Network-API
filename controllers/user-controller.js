const { json } = require("express");
const { user } = require("../models");
const { findOneAndDelete } = require("../models/user");

const userController = {
	// need the following methods getAllUser, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend
	getAllUser(req, res) {
		user
			.find()
			.then((userData) => {
				res.json(userData);
			})
			.catch((err) => {
				res.json(err);
			});
	},
	getSingleUser(req, res) {
		user
			.findOne({ _id: req.prams.userId })
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
	deleteUser(req, res) {
		user,
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
