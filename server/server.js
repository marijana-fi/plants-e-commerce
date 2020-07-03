const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const apiRouter = require("./routes");
const cors = require("cors");
const app = express();

let p = path.join(__dirname, "../public");

app.use(express.static(p));
app.use(express.json());
app.use(cors());
app.use(`/.netlify/functions/server`, apiRouter);

app.listen(process.env.PORT || 8080, () => {
	console.log("listening on port 8080");
});

module.exports.handler = serverless(app);
