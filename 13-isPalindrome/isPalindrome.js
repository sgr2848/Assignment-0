function isPalindrome(word) {
  if (word == reverse(word)){
    return true;  
  } else {
    return false;
  }
}
function reverse(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
// Do not edit this line;
module.exports = isPalindrome;