'use strict';

var table = document.getElementById('table');
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
  var totalHourlySales = 0;
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

var tableBody = document.getElementById('table-body');
var bodyRow;
var storeColumn;
var bodyColumn;
var bodyTotals;

function createTableBody() {
  for (var i = 0; i < stores.length; i++) {
    bodyRow = document.createElement('tr'); //creates a row
    storeColumn = document.createElement('th'); //creates a header cell
    storeColumn.innerHTML = stores[i].storeName; // sets value in first header cell to the store name
    bodyRow.appendChild(storeColumn); //adds store name header cell to the row
    //inner loop to push in data from each store about its projected sales that matches with the operating hours that are placed as the header above
    for (var j = 0; j < stores[i].storeHours.length; j++) {
      bodyColumn = document.createElement('td'); //makes a new column cell
      bodyColumn.innerHTML = stores[i].projectedHourlyAndDailyTotalSales()[0][j]; //sets value of bodyColumn for the specific store in array to whatever the prototype method projectedHourlyAndDailyTotalSales[0] is, which in this case is the calculated # of cookies purchased per hour
      bodyRow.appendChild(bodyColumn); //adds column to row
    };
    bodyTotals = document.createElement('th');
    bodyTotals.innerHTML = stores[i].projectedHourlyAndDailyTotalSales()[1];
    bodyRow.appendChild(bodyTotals);
    tableBody.appendChild(bodyRow);
  }
}

createTableBody();
