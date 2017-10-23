var firstAndPike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookiesSoldPer: 6.3,
  hourlySales: function() {
    return Math.floor(Math.random() * (firstAndPike.maxCustomer - firstAndPike.minCustomer)) + firstAndPike.minCustomer;
  }
};

firstAndPike.hourlySales();

var
