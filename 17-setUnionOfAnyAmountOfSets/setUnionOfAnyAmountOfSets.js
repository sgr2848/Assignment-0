function setUnionOfAnyAmountOfSets(...args) {
  var x;
  var return_set = new Set();
  for (x of args) {
    current_set = new Set(x);
    for (let element of current_set) {
      return_set.add(element);
    }
  }
  return return_set;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;