'use strict';
//this array gets filled by stores.push below
var stores = [];
var allStoresHourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var table = document.getElementById('table');
var form = document.getElementById('store_entry');
form.addEventListener('submit', formData);

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

// event handler for form submission
function formData(event) {
  event.preventDefault();
  console.log('!!!!', event.target.value);

 // OR to put decimal point in,
  //var average = parseInt(event.target.avg_per_cust.value + '.' + event.target.avg_per_cust_decimal.value);  AND CREATE NEW FORM ENTRY BOX FOR DECIMAL POINTS
  stores.push(new Store(storeName, minCust, maxCust, avgPerCust));
  createTableBody();
  //  MAYBE? createTableFooter();
  form.reset();
}


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

function createTableFooter() {
  var tableFooter = document.getElementById('table-footer');
  var footerRow;
  var footerColumn;
  var totals;
  footerRow = document.createElement('tr'); //creates the footer row
  footerColumn = document.createElement('th'); // creates the first footer cell in column
  tableFooter.innerHTML = 'Totals'; //nothign in the first cell
  footerRow.appendChild(footerColumn);
  for (var i = 0; i < allStoresHourlyTotals.length; i++) {
    totals = document.createElement('td');
    totals.innerHTML = allStoresHourlyTotals[i];
    footerRow.appendChild(totals);
  };
  totals = document.createElement('td');
  totals.innerHTML = allStoresHourlyTotals.reduce(function(a,b){return a + b;});
  footerRow.appendChild(totals);
  tableFooter.appendChild(footerRow);
}

var listener = document.getElementById('store_entry');
listener.addEventListener('submit', formData);
