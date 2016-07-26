#! /usr/bin/env node

var request = require("request");

var args = process.argv.slice(2);

function getStockPrice(callback) {
	request("http://finance.google.com/finance/info?client=ig&q=" + args[0], function(error, response, body) {
		callback(JSON.parse(body.substr(3))[0]);
	});
}

getStockPrice(function(object){console.log(object);})
