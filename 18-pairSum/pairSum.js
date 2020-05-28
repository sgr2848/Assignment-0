var assert = require('assert');
function pairSum(nums, target) {
  assert(nums.length > 1);
  dictionary = {}
  for (let i of nums) {
    potential_match = target - i;
    if (potential_match in dictionary) {
      return true
    } else {
      dictionary[i] = true;
    }    
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;