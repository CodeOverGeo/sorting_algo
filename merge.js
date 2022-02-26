function merge(arr1, arr2) {
  let firstIdx = 0;
  let secondIdx = 0;
  let result = [];
  while (firstIdx < arr1.length && secondIdx < arr2.length) {
    if (arr1[firstIdx] > arr2[secondIdx]) {
      result.push(arr2[secondIdx]);
      secondIdx++;
    } else {
      result.push(arr1[firstIdx]);
      firstIdx++;
    }
  }

  while (firstIdx < arr1.length) {
    result.push(arr1[firstIdx]);
    firstIdx++;
  }

  while (secondIdx < arr2.length) {
    result.push(arr2[secondIdx]);
    secondIdx++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = { merge, mergeSort };
