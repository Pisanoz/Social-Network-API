const mongoose = require("mongoose");

const user = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},

		email: {
			type: String,
			required: true,
			unique: true,
			// Must match a valid email address (look into Mongoose's matching validation)
		},
		thoughts: [
			{
				type: Schema.Types.ObjectId,
				ref: "Thought",
			},
		],
		friends: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
		id: false,
	}
);

user.virtual("friendCount").get(function () {
	return this.friends.length;
});

const User = mongoose.model("User", user);

module.exports = User;
