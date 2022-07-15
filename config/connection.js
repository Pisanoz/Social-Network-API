const { connect, connection } = require("mongoose");

connect('mongobd://localhost:27017/SocialDB' {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = mongoose.connection;
