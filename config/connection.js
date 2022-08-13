const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/SocialDB',{
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
