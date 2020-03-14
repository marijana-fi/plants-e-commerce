const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const apiRouter = require("./routes");
const cors = require("cors");
const app = express();

let p = path.join(__dirname, "../public");
console.log(p);

app.use(express.static(p));
app.use(express.json());
app.use(cors());
app.use(apiRouter);

app.get("/ping", function(req, res) {
	return res.send("pong");
});

app.listen(process.env.PORT || 8080, () => {
	console.log("listening on port");
});
