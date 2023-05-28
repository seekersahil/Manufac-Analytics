export default function mean(data) {
  // using reduce function to find the sum and then return it's division by length of data
  return (+(data.reduce((acc, val) => acc + +val, 0) / data.length)).toFixed(3);
}
