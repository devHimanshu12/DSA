const arr = [9, 5, 8, 3, 12, 2, 7];

function quickSort(arr, lIdx, rIdx) {
  if(lIdx>=rIdx) return
  const pivotIdx = partition(arr, lIdx, rIdx);
  const isLeftSmallSubArr = pivotIdx - 1 - lIdx < rIdx - (pivotIdx + 1);
  if (isLeftSmallSubArr) {
    quickSort(arr, lIdx, pivotIdx-1);
    quickSort(arr, pivotIdx + 1, rIdx);
  } else {
      quickSort(arr, pivotIdx + 1, rIdx);
      quickSort(arr, lIdx, pivotIdx-1);
  }
  console.log(arr)
  return arr;
}

function partition(arr, startIdx, endIdx) {
  const pivotIdx = startIdx;
  let leftIndex = startIdx + 1;
  let rightIndex = endIdx;
  while (leftIndex <= rightIndex) {
    if (arr[leftIndex] > arr[pivotIdx] && arr[rightIndex] < arr[pivotIdx]) {
      swapElement(arr, leftIndex, rightIndex);
    }
    if (arr[leftIndex] <= arr[pivotIdx]) leftIndex++;
    if (arr[rightIndex] >= arr[pivotIdx]) rightIndex--;
  }
  swapElement(arr, pivotIdx, rightIndex);

  return rightIndex;
}

function swapElement(arr, lIdx, rIdx) {
  let temp = arr[lIdx];
  arr[lIdx] = arr[rIdx];
  arr[rIdx] = temp;
}

console.log(quickSort(arr, 0, arr.length - 1));

// Best: O(nlog(n)) time | O(log(n)) space
// Average: O(nlog(n)) time | O(log(n)) space
// Worst: O(n^2) time | O(log(n)) space
