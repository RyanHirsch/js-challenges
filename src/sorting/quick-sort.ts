export function sort<T>(items: T[]) {
  const cp = [...items];
  return quickSort(cp, 0, cp.length - 1);
}

function quickSort<T>(items: T[], start: number, end: number) {
  // array with one element is already sorted
  if (end - start < 1) {
    return items;
  }

  const pivot = items[end];
  let partitionIndex = start;

  for (let i = start; i < end; i++) {
    if (items[i] < pivot) {
      if (i !== partitionIndex) {
        swap(items, i, partitionIndex);
      }
      partitionIndex++;
    }
  }
  if (partitionIndex !== end) {
    swap(items, partitionIndex, end);
  }
  quickSort(items, start, partitionIndex - 1);
  quickSort(items, partitionIndex + 1, end);
  return items;
}

function swap<T>(items: T[], firstIndex: number, secondIndex: number) {
  if (firstIndex === secondIndex) {
    throw new Error("Unneeded swap");
  }
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// function refSort<T>(unsortedArray: T[]) {
//   // Create a sortable array to return.
//   const sortedArray = [...unsortedArray];

//   // Recursively sort sub-arrays.
//   const recursiveSort = (start: number, end: number) => {
//     // If this sub-array contains less than 2 elements, it's sorted.
//     if (end - start < 1) {
//       return;
//     }

//     const pivotValue = sortedArray[end];
//     let splitIndex = start;
//     for (let i = start; i < end; i++) {
//       // This value is less than the pivot value.
//       if (sortedArray[i] < pivotValue) {
//         // If the element just to the right of the split index,
//         //   isn't this element, swap them.
//         if (splitIndex !== i) {
//           swap(sortedArray, splitIndex, i);
//         }

//         // Move the split index to the right by one,
//         //   denoting an increase in the less-than sub-array size.
//         splitIndex++;
//       }

//       // Leave values that are greater than or equal to
//       //   the pivot value where they are.
//     }

//     // Move the pivot value to between the split.
//     if (splitIndex !== end) {
//       swap(sortedArray, splitIndex, end);
//     }

//     // Recursively sort the less-than and greater-than arrays.
//     recursiveSort(start, splitIndex - 1);
//     recursiveSort(splitIndex + 1, end);
//   };

//   // Sort the entire array.
//   recursiveSort(0, unsortedArray.length - 1);
//   return sortedArray;
// }
