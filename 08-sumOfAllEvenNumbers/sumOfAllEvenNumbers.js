function sumOfAllEvenNumbers(nums) {
  count = 0;
  var i;
  for (i of nums) {
    if (i % 2 === 0) {
      count++;
    }
  }
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;