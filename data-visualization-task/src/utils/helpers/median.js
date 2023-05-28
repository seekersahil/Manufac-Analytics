export default function median(data) {
  if (data?.length === 0) {
    return 0;
  }
  data = data.sort((a, b) => a - b);
  //finding the mid index
  const mid = Math.floor(data.length / 2);

  if (data.length % 2 !== 0) {
    // median is middle value in case of odd values
    return data[mid].toFixed(3);
  } else {
    // median is mean of middle 2 value in case of even values
    return ((data[mid - 1] + data[mid]) / 2).toFixed(3);
  }
}
