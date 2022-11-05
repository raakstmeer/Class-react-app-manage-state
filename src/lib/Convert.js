export function toCelsius(fahrenhite) {
  return ((fahrenhite - 32) * 5) / 9;
}

export function toFahrenhite(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function convert(temperature, convertTo) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertTo(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
