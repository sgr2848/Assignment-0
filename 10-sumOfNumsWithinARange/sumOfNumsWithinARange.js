function sumOfNumsWithinARange(nums, start, end) {
  count = 0;
  var x;
  for (x of nums) {
    if (x >= start && x<= end) {
      count++
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;