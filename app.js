'use strict';
//this array gets filled by stores.push below
var stores = [];
var allStoresHourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var table = document.getElementById('table');
var form = document.getElementById('form');

//constructor function to create stores
function Store(storeName, minCust, maxCust, avgPerCust) {
  this.storeName = storeName,
  this.minCust = minCust,
  this.maxCust = maxCust,
  this.avgPerCust = avgPerCust,
  this.totalDailySales = 0,
  this.storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM',]; //this could be global since they are all operating with same hours
  this.cookiesSoldPerHour = [];
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
  for(var i = 0; i < this.storeHours.length; i++) {
    var projectedCustomers = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
    projectedHourlySales.push(Math.ceil(projectedCustomers * this.avgPerCust));
    totalHourlySales += (Math.ceil(projectedCustomers * this.avgPerCust));
    allStoresHourlyTotals[i] += Math.ceil(projectedCustomers * this.avgPerCust);
    console.log(allStoresHourlyTotals);
    //console.log('projected hourly sales:', projectedHourlySales[i]);
  }
  this.cookiesSoldPerHour = projectedHourlySales;
  this.totalDailySales = totalHourlySales;
};

function createTableHeaders() {
  var tableHeader = document.getElementById('table-header');
  var headerRow;
  var headerColumn;
  var hours;
  headerRow = document.createElement('tr'); //creates the header row
  headerColumn = document.createElement('th'); // creates the first header cell in column
  tableHeader.innerHTML = ''; //nothign in the first cell
  headerRow.appendChild(headerColumn); //adds headerColumn, which is empty <th>, to the created header row
  for (var i = 0; i < stores[0].storeHours.length; i++) {
    hours = document.createElement('th');
    hours.innerHTML = stores[0].storeHours[i];
    headerRow.appendChild(hours);
    //console.log(typeof headerRow, headerRow);
  };
  hours = document.createElement('th');
  hours.innerHTML = 'Daily Location Total';
  headerRow.appendChild(hours); //adds hours of operation cells to headr row
  tableHeader.appendChild(headerRow); // adds COMPLETE header row to table header, which is mapped to HTML
}

createTableHeaders();

function createTableBody() {
  var tableBody = document.getElementById('table-body');
  var bodyRow;
  var storeColumn;
  var bodyColumn;
  var bodyTotals;
  for (var i = 0; i < stores.length; i++) {
    stores[i].projectedHourlyAndDailyTotalSales();
    bodyRow = document.createElement('tr'); //creates a row
    storeColumn = document.createElement('th'); //creates a header cell
    storeColumn.innerHTML = stores[i].storeName; // sets value in first header cell to the store name
    bodyRow.appendChild(storeColumn); //adds store name header cell to the row
    for (var j = 0; j < stores[i].storeHours.length; j++) {
      bodyColumn = document.createElement('td'); //makes a new column cell
      bodyColumn.innerHTML = stores[i].cookiesSoldPerHour[j];
      bodyRow.appendChild(bodyColumn); //adds column to row
      console.log('i:', i);
    };
    bodyTotals = document.createElement('th');
    bodyTotals.innerHTML = stores[i].totalDailySales;
    bodyRow.appendChild(bodyTotals);
    tableBody.appendChild(bodyRow);
  }
}

createTableBody();


// function createTableFooter() {
//   for (var i = 0; i < stores.length; i++) {
//     footerRow = document.createElement('tr'); //creates a row
//     totalsColumn = document.createElement('th'); //creates a header cell
//     totalsColumn.innerHTML = 'Totals'; // sets value in first header cell to the store name
//     footerRow.appendChild(totalsColumn); //adds store name header cell to the row
//     for (var j = 0; j < stores[i].storeHours.length; j++) {
//       footerColumn = document.createElement('td'); //makes a new column cell
//       footerColumn.innerHTML = stores[i].projectedHourlyAndDailyTotalSales()[0][j];
//       footerRow.appendChild(footerColumn); //adds column to row
//     };
//     footerTotals = document.createElement('th');
//     footerTotals.innerHTML = stores[i].projectedHourlyAndDailyTotalSales()[1];
//     footerRow.appendChild(footerTotals);
//     tableFooterTotals.appendChild(footerRow);
//   }
// }
//
// createTableFooter();

// function formEntry(event) {
//   event.preventDefault();
//
//   var location = event.target.location.value;
//   var minCust = event.target.min-cust.value;
//   var maxCust = event.target.max-cust.value;
//   var avgPerCust = even.target.avg-per-cust.value;
//
//   if (Number(minCust) < Number(maxCust)) {
//     stores.push(new Store(location, minCust, maxCust, avgPerCust));
//     createTable();
//     form.reset();
//   } else {
//     alert('Max Customers must be greater than Min Customers');
//   }
// }
