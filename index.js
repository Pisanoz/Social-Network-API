const express = require("express");

const app = express();
const port = 3001;
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("", () => {
	app.listen(PORT, () => {
		console.log(`API server for ${activity} running on port ${PORT}!`);
	});
});
