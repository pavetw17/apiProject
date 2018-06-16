const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken")
// const user = require("./user.js");
// const game = require("./game.js");
// const exception = require("./exception.js");
secretKey = "123456";

const app = express();
app.use(bodyParser.json());

function errorHanlder(error, req, res, next) {
	console.error('error happens: ${error}');
	res.status(500).end();
}
app.use(errorHanlder);

app.get("/",(req,res) => {
	res.send("Tic Tac Toe game");
});

app.use(bodyParser.urlencoded())

app.post("/register", (req, res) => {
	const content = req.body;
	const username = content.username;
	const password = content.password;
	const passwordConfirmation = content.passwordConfirmation;

	console.error('error happens:', req.body);
	res.send('username');

	if(password != passwordConfirmation){
		console.log("password not matched!");
		res.writeHead(400, {"Content-Type": "application/json"});
		res.end(JSON.stringify(new exception.PasswordUnMatched().toJson()));
	}

});

app.listen(5000, () => {
	console.log("server started, listening on port 5000!");
});
