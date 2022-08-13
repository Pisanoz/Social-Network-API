const { User, Thought } = require("../models");

const thoughtController = {
	getThoughts(req, res) {
		Thought.find()
			.then((thoughts) => res.json(thoughts))
			.catch((err) => res.status(500).json(err));
	},

	getThoughtById(req, res) {
		Thought.findOne({ _id: req.params.thoughtId })
			.then(async (thought) =>
				!thought
					? res.status(404).json({ message: "No thought with this id found." })
					: res.json(thought)
			)
			.catch((err) => res.status(500).json(err));
	},

	// createThought(req, res) {
	// 	Thought.create(req.body)
	// 		.then((thought) =>
	// 			User.findOneAndUpdate(
	// 				{ _id: req.body.userId },
	// 				{ $addToSet: { thoughts: thought._id } },
	// 				{ runValidators: true, new: true }
	// 			)
	// 		)
	// 		.then((user) =>
	// 			!user
	// 				? res.status(404).json({ message: "No user found." })
	// 				: res.json(user)
	// 		)
	// 		.catch((err) => res.status(500).json(err));
	// },

	// updateThought(req, res) {
	// 	Thought.findOneAndUpdate(
	// 		{ _id: req.params.thoughtId },
	// 		{ $set: req.body },
	// 		{ runValidators: true, new: true }
	// 	)
	// 		.then((thought) =>
	// 			!thought
	// 				? res.status(404).json({ message: "No thought with this id found." })
	// 				: res.json(thought)
	// 		)
	// 		.catch((err) => res.status(500).json(err));
	// },

	// deleteThought(req, res) {
	// 	Thought.findOneAndDelete({ _id: req.params.thoughtId })
	// 		.then((thought) =>
	// 			!thought
	// 				? res.status(404).json({ message: "No thought with this id found." })
	// 				: res.json(thought)
	// 		)
	// 		.catch((err) => res.status(500).json(err));
	// },

	// createReaction(req, res) {
	// 	Thought.findOneAndUpdate(
	// 		{ _id: req.params.thoughtId },
	// 		{ $addToSet: { reactions: req.body } }
	// 	)
	// 		.then((thought) =>
	// 			!thought
	// 				? res.status(404).json({ message: "No thought with this id found." })
	// 				: res.json(thought)
	// 		)
	// 		.catch((err) => res.status(500).json(err));
	// },

	// deleteReaction(req, res) {
	// 	Thought.findOneAndUpdate(
	// 		{ _id: req.params.thoughtId },
	// 		{ $pull: { reactions: { reactionId: req.params._id } } },
	// 		{ runValidators: true, new: true }
	// 	)
	// 		.then((thought) =>
	// 			!thought
	// 				? res.status(404).json({ message: "No thought with this id found." })
	// 				: res.json({ message: "Reaction Deleted" })
	// 		)
	// 		.catch((err) => res.status(500).json(err));
	// },
};

module.exports = thoughtController;
