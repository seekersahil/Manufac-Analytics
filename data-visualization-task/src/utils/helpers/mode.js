export default function mode(data) {
  const hashMap = {},
    mode = [];
  let firstMode;
  // mapping frequency of each element
  for (let item of data) {
    item = Number(item).toFixed(3);
    hashMap[item] = hashMap[item] + 1 || 1;
  }

  // finding maximum frequency within hashMap
  const maxFrequency = Math.max(...Object.values(hashMap));

  // adding all elements and first element with highest frequency to mode
  for (let item in hashMap) {
    if (hashMap[item] === maxFrequency) {
      if (!firstMode) {
        firstMode = item;
      }
      mode.push(item);
    }
  }
  return { mode, firstMode };
}
