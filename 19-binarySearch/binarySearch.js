// var assert = require("assert");
class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    var mid = Math.floor(nums.length / 2);
    var start = 0;
    var end = nums.length - 1
    if (nums.length >= 1) {
      // console.log(`mid ${nums[mid]}`);
      // console.log(`start ${nums[start]}`);
      // console.log(`end  ${nums[end]}`);
      if (nums[mid] === target) {
        return true;
      } else if (nums[mid] > target) {
        // console.log(nums.slice(0, mid))
        return this.binarySearch(nums.slice(0, mid), target);
      }
      else {
        return this.binarySearch(nums.slice(mid + 1), target);
      }
    }
    else {
      return false;
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;