var convert = function(gallons, liters) {
  return gallons / liters;
};

var calculate = function(gallons, liters) {
  var gallons = parseInt(prompt("Enter gallons:"));
  var liters = 3.78541;
  alert("Your converted amount is " + convert(gallons,liters) + "." );
};



calculate();
