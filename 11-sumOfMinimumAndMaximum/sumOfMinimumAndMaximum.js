// function quick_sort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     var left = [];
//     var right = [];
//     var newArray = [];
//     var pivot = arr.pop();
//     var length = arr.length;

//     for (var i = 0; i < length; i++) {
//       if (arr[i] <= pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }

//     return newArray.concat(quick_sort(left), pivot, quick_sort(right));
//   }
// }
function sumOfMinimumAndMaximum(nums) {
  // sorted_arr = quick_sort(nums)
  // return sorted_arr[0] + sorted_arr[sorted_arr.length-1];
  var max=Math.max(...nums);
  var min = Math.min(...nums);
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;