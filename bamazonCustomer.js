var prompt = require ('prompt');
var mysql = require ('mysql');
const chalk = require ('chalk');

console.log("Welcome to Bamazon");

var prompt = require('prompt');
 
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['id_number', 'units_requested'], function (err, result) {
  //
  // Log the results.
  // 
  console.log(chalk.bgGreen('  Bamazon data received'));
  console.log(chalk.bgBlue('  You would like to purchase: ' + result.id_number));
  console.log(chalk.bgMagenta('  Amount of units: ' + result.units_requested));
});