function fizzBuzz(start, end) {
  return_arr = [];
  for (i = start; i <= end; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      return_arr.push("FizzBuzz");
    } else if (i % 5 === 0 && i % 3 !== 0) {
      return_arr.push("Buzz");
    } else if (i % 3 === 0 && i % 5 !== 0) {
      return_arr.push("Fizz");
    } else {
      return_arr.push(i);
    }
  }
  return return_arr;
}

// Do not edit this line;
module.exports = fizzBuzz;