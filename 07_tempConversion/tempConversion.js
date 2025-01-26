const convertToCelsius = function(fahrenheit) {
  let calc = ((fahrenheit-32) * (5/9));
  if (Number.isInteger(calc)) {
    return calc;
  } else {
    return parseFloat(calc.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {
  let calc = ((celsius*(9/5) + 32));
  if (Number.isInteger(calc)) {
    return calc;
  } else {
    return parseFloat(calc.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
