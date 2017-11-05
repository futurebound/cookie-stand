'use strict';

var pikeStore = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  // this is a variable to keep track of totalHourlySales with the randomly generated projectedSales number at each hour, so in future if we want
  totalHourlySales: 0,
  // empty array to push the projected sales value per hour as calculated by the for loop
  projectedHourlySales: [],
  // array to use in for loop that has the operating hours of business factored into calculations
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  // function modeling for # of hourly customers
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    // for loop that cycles through all the storeHours array to provide projectedSales data based on the min/max customer values provided, as well as the average cookies sold per customer, pushes the projected hourly sales calculated from the randomly calculated projected customers, console logs those values with each iteration per hour, and then ultimately returns an array with the projected hourly sales for each hour and the total hourly sales for the day
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('projected hourly sales:', this.projectedHourlySales[i]);
      console.log('total hourly sales:', this.totalHourlySales);
    };
    // returns key metrics into an array
    return [this.projectedHourlySales, this.totalHourlySales];
  }
};

var seatacStore = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
  totalHourlySales: 0,
  projectedHourlySales: [],
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('projected hourly sales:', this.projectedHourlySales[i]);
      console.log('total hourly sales:', this.totalHourlySales);
    };
    return [this.projectedHourlySales, this.totalHourlySales];
  }
};

var seattleCenterStore = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
  totalHourlySales: 0,
  projectedHourlySales: [],
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('projected hourly sales:', this.projectedHourlySales[i]);
      console.log('total hourly sales:', this.totalHourlySales);
    };
    return [this.projectedHourlySales, this.totalHourlySales];
  }
};

var capHillStore = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
  totalHourlySales: 0,
  projectedHourlySales: [],
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('projected hourly sales:', this.projectedHourlySales[i]);
      console.log('total hourly sales:', this.totalHourlySales);
    };
    return [this.projectedHourlySales, this.totalHourlySales];
  }
};

var alkiStore = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
  totalHourlySales: 0,
  projectedHourlySales: [],
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  hourlyCustomers: function() {
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      this.projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      this.totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('projected hourly sales:', this.projectedHourlySales[i]);
      console.log('total hourly sales:', this.totalHourlySales);
    };
    return [this.projectedHourlySales, this.totalHourlySales];
  }
};

// array with all of the previously defined object literals
var storesArray = [pikeStore, seatacStore, seattleCenterStore, capHillStore, alkiStore];


// salesMetrics is a function that accepts storesArray as argument
var salesMetrics = function(storesArray) {
  // cycles through each store name and for each
  // start for loop - iterate through storesArray
  for (var j = 0; j < storesArray.length; j++) {
    // creates section elements in HTML
    // build DOM elements
    // storeSection is for creating a 5 different sections, 1 for each item salesAr
    document.createElement('section');
    // var storeName = '<h2>' + storesArray[k].name + '</h2>';
    // setup salesAmt array - this will get data pushed to it
    var salesAmount = ['<h2>' + storesArray[j].storeName + '</h2>', '<ul>'];
    // defines salesAmountTotal to utilized within the following code and nested for loop
    var salesAmountTotal;
    // grab current sales item and call hourlyCustomers function to generate hourly sales
    storesArray[j].hourlyCustomers();
    // for every storeName that has had a section created, also creates an unordered list
    var storeSales = document.createElement('section');
    // nested for loop that will create <li> in HTML for every iteration of the businessHours array within every iteration of the storesArray. this allows it to cycle and run for every different storesection, which was already in an array and linked to the above object literals i.e. storesArray[0].hoursOfBusiness.length will crank out 5 different sections, and in each iteration it runs this nested loop
    for (var k = 0; k < storesArray[j].storeHours.length; k++) {
      // this pushed the salesAmount array which is an array with the h2 header strings that contain the name of the store, which changes with each iteration of the above for loop to match the proper iteration index
      // what is pushed is ultimately 14 list items from this loop that contain the hour of business (6AM, 7AM, etc.) as well as the randomly generated sales from the above storesArray[k].hourlyCustomers(); function call, in one giant concatenated string that closes itself as a list time and is placed in the unordered list created for each section and store above
      // console.log(storesArray[j]);
      salesAmount.push('<li>' + storesArray[j].storeHours[k] + ': ' + storesArray[j].projectedHourlySales[k] + '</li>');
    }
    // this assigns a value to the previously defined salesAmountTotal variable, which is a list item placed at the bottom of the previous list saying 'total: ' then the sales total for the hours of operation
    salesAmountTotal = '<li>Total: ' + storesArray[j].totalHourlySales + '</li>';
    // this pushes the list item string to the salesAmount array above
    salesAmount.push(salesAmountTotal);
    // this pushes a closing </ul> tag to close the unordered list
    salesAmount.push('</ul>');
    // this changes the content of the HTML file
    storeSales.innerHTML = salesAmount.join('');
    // this console logs the storeSales values
    console.log('store sales:', storeSales);
    // this finds the salesContent ID in the HTML file and appends (combines) each section in the storeSales
    document.getElementById('salesContent').appendChild(storeSales);
  }
};

// this runs the buildSales function and accepts the storesArray array as its argument
salesMetrics(storesArray);











//
// var buildSales = function(salesArray) {
//   for (var k = 0; k < salesArray.length; k++) {
//     document.createElement('section');
//     var salesAmount = ['<h2>' + salesArray[k].name + '</h2>', '<ul>'];
//     var salesAmountTotal;
//     salesArray[k].hourlyCustomers();
//     var storeSales = document.createElement('section');
//     for (var l = 0; l < salesArray[k].hoursOfBusiness.length; l++) {
//       salesAmount.push('<li>' + salesArray[k].hoursOfBusiness[l] + ': ' + salesArray[k].salesPerHour[l] + '</li>');
//     }
//     salesAmountTotal = '<li>Total: ' + salesArray[k].salesTotal + '</li>';
//     salesAmount.push(salesAmountTotal);
//     salesAmount.push('</ul>');
//     storeSales.innerHTML = salesAmout.join('');
//     console.log('store sales:', storeSales);
//     document.getElementById('salesContent').appendChild(storeSales);
//   }
// };
//
// buildSales(storeLocations);
