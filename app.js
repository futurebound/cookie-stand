var pikeStore = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesPerCustomer: 6.3,
  // array to use in for loop that has the operating hours of business factored into calculations
  storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm,', '5pm', '6pm', '7pm'],
  // empty array to push the projected sales value per hour as calculated by the for loop
  salesPerHour: [],
  //
  totalSales: 0,
  // next function modeling for # of hourly customers
  hourlyCustomers: function() {
    var min = this.minCustomer;
    var max = this.maxCustomer;
    // this is a variable to keep track of totalHourlySales with the randomly generated projectedSales number at each hour, so in future if we want
    var totalHourlySales = 0;
    var hourlySales = [];
    for(var i = 0; i < this.storeHours.length; i++) {
      var projectedSales = Math.floor(Math.random() * (max - min) + min);
      hourlySales.push(Math.ceil(projectedSales * this.avgCookiesPerCustomer));
      totalHourlySales += (Math.ceil(projectedSales * this.avgCookiesPerCustomer));
      console.log('hourly sales:', hourlySales[i]);
      console.log('total hourly sales:', totalHourlySales);
    };
    return [hourlySales, totalHourlySales];
  },
  //salesData: hourlyCustomers()
};



actualCust: function() {
  var min = this.minCust;
  var max = this.maxCust;
  var salesAmounts = [];
  for (var i = 0; i < this.hoursOfBusiness.length; i++){
    var randomSale = Math.floor(Math.random() * (max - min) + min);
    salesAmounts.push(Math.ceil(randomSale * this.avgCookSales));
  }
this.salesPerHour = salesAmounts;
return;
}



for(i = 0; i < somearray; i++) {
  push.
}



var
