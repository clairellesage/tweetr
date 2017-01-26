"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
// const initRoutes    = require('./routes/tweets.js');
const DataHelpers 	= require("./lib/data-helpers.js");
const initRoutes 	  = require("./routes/tweets");

const MongoClient = require('mongodb').MongoClient;
//connection URL
const MONG_URI = 'mongodb://localhost:27017/tweets';

MongoClient.connect(MONG_URI, (err, db) => {
	if (err) {
		return console.err(err);
	}
	app.use("/tweets", initRoutes);
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static("public"))
	
	app.listen(PORT, () => {
	  console.log("Example app listening on port " + PORT);
	});
	console.log("result: ",DataHelpers(db))
	initRoutes(DataHelpers(db));

	  // initRoutes(app, db);
});




