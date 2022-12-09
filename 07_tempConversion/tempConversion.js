const convertToCelsius = (fahrenheit) =>{
  let celsiusConverted = (fahrenheit-32)*(5/9)
  return Math.round(celsiusConverted*10)/10 
};

const convertToFahrenheit = (celsius) => {
  let fahrenheitConverted = (celsius*(9/5)+32)
  return Math.round(fahrenheitConverted*10)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
