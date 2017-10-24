'use strict';

var pikeStore = {
  storeName: '1st and Pike',
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCustomer: 6.3,
  // array to use in for loop that has the operating hours of business factored into calculations
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  // function modeling for # of hourly customers
  hourlyCustomers: function() {
    var min = this.minCustomer;
    var max = this.maxCustomer;
    var avg = this.avgCookiesPerCustomer;
    // this is a variable to keep track of totalHourlySales with the randomly generated projectedSales number at each hour, so in future if we want
    var totalHourlySales = 0;
    // empty array to push the projected sales value per hour as calculated by the for loop
    var projectedHourlySales = [];
    // for loop that cycles through all the storeHours array to provide projectedSales data based on the min/max customer values provided, as well as the average cookies sold per customer, pushes the projected hourly sales calculated from the randomly calculated projected customers, console logs those values with each iteration per hour, and then ultimately returns an array with the projected hourly sales for each hour and the total hourly sales for the day
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedCustomers = Math.floor(Math.random() * (max - min) + min);
      projectedHourlySales.push(Math.ceil(projectedCustomers * avg));
      totalHourlySales += (Math.ceil(projectedCustomers * avg));
      console.log('total hourly sales:', totalHourlySales);
      console.log('projected hourly sales:', projectedHourlySales[i]);
    };
    return [projectedHourlySales, totalHourlySales];
  }
};

var storeData = [pikestore.storeName, ]


function adminMetrics() {
  var container = document.createElement('div')
  container.innerHTML = '<ul>' +
};
