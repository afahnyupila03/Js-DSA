function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (i < array2.length) {
    combined.push(array1[j]);
    j++;
  }
  return combined;
}

function mergeSort(array) {
  if (array.length === 1) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function test() {
  let myArray1 = [1, 3, 7, 8];
  let myArray2 = [2, 4, 5, 6];
  console.log(merge(myArray1, myArray2));
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/
