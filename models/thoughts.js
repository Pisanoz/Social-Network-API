const mongoose = require("mongoose");
const reactionSchema = require("./reaction");
const dateFormat = require("../utils/data");

const thought = new mongoose.Schema(
	{
		thoughtText: {
			type: String,
			required: true,
			minlength: 1,
			maxlength: 280,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			get: (timestamp) => dateFormat(timestamp),
		},
		username: {
			type: String,
			required: true,
		},
		reactions: [reactionSchema],
	},
	{
		toJSON: {
			getters: true,
		},
		id: false,
	}
);

thought.virtual("reactionCount").get(function () {
	return this.reactions.length;
});

const Thought = mongoose.model("Thought", thought);

module.exports = Thought;
