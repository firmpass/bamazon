var prompt = require ('prompt');
var mysql = require ('mysql');
var inquirer = require ('inquirer');
const chalk = require ('chalk');
const {table} = require('table');

console.log(chalk.bold.bgGreen("Welcome to Bamazon"));

// var prompt = require('prompt');
 
//
// Start the prompt
//
prompt.start();

var connection = mysql.createConnection({
  host     : 'localhost',
  post     :  3306,
  user     : 'root',
  password : '',
  database : 'bamazonDB'
});
 
connection.connect(function (err) {
  if (err) throw err;  
});

function productDisplay() {
  
}
connection.query('SELECT * FROM bamazonDB.products', function (error, rows, fields) {
  if (error) {
  console.log(chalk.red('Error in the query'));
  } else {
  console.log(chalk.green('Successful query\n'));
  let data = [];
  const columnNames = Object.keys(rows[0]);
  data.push(columnNames);
  rows.forEach(element => {
    let rowInfo =[element.id, element["product_name"], element["department_name"], element.price, element["stock_quantity"]];
    data.push(rowInfo)
  });
  // console.log(data);
  let output = table(data);
  console.log(output);
  }
  idInput();
});

let data = [];
data.forEach((result) =>{})

// function idInput() {
//   inquirer
//   .prompt({
//     name: "id_number",
//     type: "units_requested",
//     message: "Will this be all?"
//   })
//   //loop through the id_number to display the product name
//   //After product_name is displayed ensure that the quantity amount is reflected for the product_name.
// }
//pretty much the require statement



//
function idInput() {
  prompt.get(['id_number', 'units_requested'], function (err, result) {
    //
    // Log the results.
    // 
    console.log(chalk.bgGreen('  Bamazon data received'));
    console.log(chalk.bgBlue('  You would like to purchase: ' + result.id_number));
    console.log(chalk.bgMagenta('  Amount of units: ' + result.units_requested));
    
    if (result.units_requested >= 50) {
      console.log(chalk.red(' Insufficient Quantity  '));
    }
    else {
      console.log(chalk.bgCyan('  Order Completed!!!  '));
    }
  });
}


