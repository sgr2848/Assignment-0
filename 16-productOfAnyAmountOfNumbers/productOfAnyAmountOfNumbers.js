function productOfAnyAmountOfNumbers(...args) {
  var x;
  var product = null;
  for (x of args) {
    if (product == undefined) {
      product = x;
    } else {
      product = x * product;
    }
  }
  return product
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;