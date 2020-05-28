function countOfAllNumbersSmallerThanTarget(nums, target) {
  count = 0;
  var i;
  for (i of nums) {
    if (i < target) {
      count++
    }
    else{}
  }
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;