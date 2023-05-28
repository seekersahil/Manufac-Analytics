export default function mean(data) {
  return (+(data.reduce((acc, val) => acc + +val, 0) / data.length)).toFixed(3);
}
