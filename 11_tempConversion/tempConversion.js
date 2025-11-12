const convertToCelsius = function(fahren) {
  let cel = (fahren - 32) / 1.8
  return Number(cel.toFixed(1))
};

const convertToFahrenheit = function(cel) {
  let fahren = cel * 1.8 + 32
  return Number(fahren.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
