export default function convert (temperature, convertTo) {
  const input = parseFloat(temperature);
  if(Number.isNaN(input)) return '';

  const output = convertTo === 'f' ? input * (9 / 5) + 32 : ((input - 32) * 5) / 9;
  return output.toFixed(2).toString();
}