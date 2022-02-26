function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sorted = true;
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        sorted = false;
      }
    }
    if (sorted) break;
  }
  return arr;
}

// function bubbleSort(arr) {
// fancy swapping function ---->
//     const swap = (arr, idx1, idx2) => {
//       [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };
// backstep through the array to eliminate the need for helper (sorted) variable
//     for (let i = arr.length; i > 0; i--) {
//       for (let j = 0; j < i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }

//     return arr;
//   }

module.exports = bubbleSort;
