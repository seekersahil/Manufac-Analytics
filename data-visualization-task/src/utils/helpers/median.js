export default function median(data) {
  data = data.sort((a, b) => a - b);
  const mid = Math.floor(data.length / 2);

  if (data.length % 2) return data[mid].toFixed(3);

  return ((data[mid - 1] + data[mid]) / 2).toFixed(3);
}
