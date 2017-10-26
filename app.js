'use strict';

var table = document.getElementById('table');
var tableBody = document.getElementById('table-body');
var tableFooter = document.getElementById('table-footer');
//this array gets filled by stores.push below
var stores = [];
//var dailyTotals = [];
//var hourlySalesArray = [];

//constructor function to create stores
function Store(storeName, minCust, maxCust, avgPerCust) {
  this.storeName = storeName,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgPerCust = avgPerCust,
  this.totalHourlySales = 0,
  this.storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM',];
};

//pushes new objects to the stores array above, that contain dynamic information as properties of those objects that can be called upon by things such as stores[0].storeName, etc.
stores.push(new Store('1st and Pike', 23, 65, 6.3));
stores.push(new Store('SeaTac Airport', 3, 24, 1.2));
stores.push(new Store('Seattle Center', 11, 38, 3.7));
stores.push(new Store('Capitol Hill', 20, 38, 2.3));
stores.push(new Store('Alki', 2, 16, 4.6));

//prototype mtehod to get projectedHourlyCustomers
Store.prototype.projectedHourlyAndDailyTotalSales = function() {
  var projectedHourlySales = [];
  //var totalHourlySales = 0;
  for(var i = 0; i < this.storeHours.length; i++) {
    var projectedCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    projectedHourlySales.push(Math.ceil(projectedCustomers * this.avgPerCust));
    totalHourlySales += (Math.ceil(projectedCustomers * this.avgPerCust));
    console.log('projected hourly sales:', projectedHourlySales[i]);
  }
  return [projectedHourlySales, totalHourlySales];
};

// var projectedHourlySales = hourlySalesArray;
// stores[0].projectedHourlyAndDailyTotalSales();
// stores[1].projectedHourlyAndDailyTotalSales();
// stores[2].projectedHourlyAndDailyTotalSales();
// stores[3].projectedHourlyAndDailyTotalSales();
// stores[4].projectedHourlyAndDailyTotalSales();

var tableHeader = document.getElementById('table-header');
var headerRow;
var headerColumn;
var hours;

function createTableHeaders() {
  headerRow = document.createElement('tr'); //creates the header row
  headerColumn = document.createElement('th'); // creates the first header cell in column
  tableHeader.innerHTML = ''; //nothign in the first cell
  headerRow.appendChild(headerColumn);
  for (var i = 0; i < stores[0].storeHours.length; i++) {
    hours = document.createElement('th');
    hours.innerHTML = stores[0].storeHours[i];
    headerRow.appendChild(hours);
    console.log(typeof headerRow, headerRow);
  };
  // var dailyLocationTotals = document.createElement('th');
  // dailyLocationTotals.innerHTML = '<th>Daily Location Total</th>';
  hours = document.createElement('th');
  hours.innerHTML = 'Daily Location Total';
  headerRow.appendChild(hours);
  tableHeader.appendChild(headerRow);
}

createTableHeaders();

// var tableContent = document.getElementById('table_content');  //select the empty table
// var tableRow;
// var titleCol;
// var dataCol;
// var totalCol;
// for (var row = 0; row < storeLocations.length; row ++) {  //the outer loop creates a row for each store
//   tableRow = document.createElement('tr');  //create a new row
//   titleCol = document.createElement('th');  //create the first column in the row
//   titleCol.innerHTML = storeLocations[row].name;   //set the value of the column to the store title
//   tableRow.appendChild(titleCol);  //add the column to the row
//   //the inner loop creates columns in each row for each value in cookies per hour
//   for (var col = 0; col < storeLocations[row].cookiesPerHour.length; col++) {
//     dataCol = document.createElement('td');  //create a new column
//     dataCol.innerHTML = storeLocations[row].cookiesPerHour[col];  //set the value of the column to the cookies per hour value
//     tableRow.appendChild(dataCol);  //add the column to the row
//   };
//
//   totalCol = document.createElement('th');  //create a new column
//   totalCol.innerHTML = storeLocations[row].dailyTotal  //set the value of the column to the daily total
//   tableRow.appendChild(totalCol);  //add the column to the end of the row
//   tableContent.appendChild(tableRow);  //add the row to the table then move on to the next row and repeat
// };


// var salesMetrics = function(storeData) {
//   for (var j = 0; j < storeData.length; j++) {
//     document.createElement('section');
//     var salesAmount = ['<thead>' + storeData[j].storeName + '</thead>', '<ul>'];
//     var salesAmountTotal;
//     storeData[j].hourlyCustomers();
//     var storeSales = document.createElement('section');
//     for (var k = 0; k < storeData[j].storeHours.length; k++) {
//       salesAmount.push('<li>' + storeData[j].storeHours[k] + ': ' + storeData[j].projectedHourlySales[k] + '</li>');
//     }
//     salesAmountTotal = '<li>Total: ' + storeData[j].totalHourlySales + '</li>';
//     salesAmount.push(salesAmountTotal);
//     salesAmount.push('</ul>');
//     storeSales.innerHTML = salesAmount.join('');
//     console.log('store sales:', storeSales);
//     document.getElementById('salesContent').appendChild(storeSales);
//   }
// };
//
// // this runs the buildSales function and accepts the storesArray array as its argument
// salesMetrics(stores);



// hourlyCustomers = function() {
//   var min = this.minCust;
//   var max = this.maxCust;
//   var avg = this.avgPerCust;
//   // for loop that cycles through all the storeHours array to provide projectedSales data based on the min/max customer values provided, as well as the average cookies sold per customer, pushes the projected hourly sales calculated from the randomly calculated projected customers, console logs those values with each iteration per hour, and then ultimately returns an array with the projected hourly sales for each hour and the total hourly sales for the day
//   for(var i = 0; i < this.storeHours.length; i++) {
//     var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
//     this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
//     this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
//     console.log('projected hourly sales:', this.projectedHourlySales[i]);
//     console.log('total hourly sales:', this.totalHourlySales);
//   };
//   // returns key metrics into an array
//   return [this.projectedHourlySales, this.totalHourlySales];
// };
// //
//
// // salesMetrics is a function that accepts storesArray as argument
// var salesMetrics = function(storeData) {
//   // cycles through each store name and for each
//   // start for loop - iterate through storesArray
//   for (var j = 0; j < storeData.length; j++) {
//     // creates section elements in HTML
//     // build DOM elements
//     // storeSection is for creating a 5 different sections, 1 for each item salesAr
//     document.createElement('section');
//     // var storeName = '<h2>' + storesArray[k].name + '</h2>';
//     // setup salesAmt array - this will get data pushed to it
//     var salesAmount = ['<h2>' + storeData[j].storeName + '</h2>', '<ul>'];
//     // defines salesAmountTotal to utilized within the following code and nested for loop
//     var salesAmountTotal;
//     // grab current sales item and call hourlyCustomers function to generate hourly sales
//     storeData[j].hourlyCustomers();
//     // for every storeName that has had a section created, also creates an unordered list
//     var storeSales = document.createElement('section');
//     // nested for loop that will create <li> in HTML for every iteration of the businessHours array within every iteration of the storesArray. this allows it to cycle and run for every different storesection, which was already in an array and linked to the above object literals i.e. storesArray[0].hoursOfBusiness.length will crank out 5 different sections, and in each iteration it runs this nested loop
//     for (var k = 0; k < storeData[j].storeHours.length; k++) {
//       // this pushed the salesAmount array which is an array with the h2 header strings that contain the name of the store, which changes with each iteration of the above for loop to match the proper iteration index
//       // what is pushed is ultimately 14 list items from this loop that contain the hour of business (6AM, 7AM, etc.) as well as the randomly generated sales from the above storesArray[k].hourlyCustomers(); function call, in one giant concatenated string that closes itself as a list time and is placed in the unordered list created for each section and store above
//       // console.log(storesArray[j]);
//       salesAmount.push('<li>' + storeData[j].storeHours[k] + ': ' + storeData[j].projectedHourlySales[k] + '</li>');
//     }
//     // this assigns a value to the previously defined salesAmountTotal variable, which is a list item placed at the bottom of the previous list saying 'total: ' then the sales total for the hours of operation
//     salesAmountTotal = '<li>Total: ' + storeData[j].totalHourlySales + '</li>';
//     // this pushes the list item string to the salesAmount array above
//     salesAmount.push(salesAmountTotal);
//     // this pushes a closing </ul> tag to close the unordered list
//     salesAmount.push('</ul>');
//     // this changes the content of the HTML file
//     storeSales.innerHTML = salesAmount.join('');
//     // this console logs the storeSales values
//     console.log('store sales:', storeSales);
//     // this finds the salesContent ID in the HTML file and appends (combines) each section in the storeSales
//     document.getElementById('salesContent').appendChild(storeSales);
//   }
// };
