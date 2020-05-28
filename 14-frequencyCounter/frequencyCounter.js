function frequencyCounter(word) {
  freq = {};
  for (var x = 0; x < word.length; x++) {
    var char = word.charAt(x);
    if (char in freq) {
      freq[char] = freq[char] + 1;
    } else {
      freq[char] = 1;
    }
  }
  return freq;
}
// Do not edit this line;
module.exports = frequencyCounter;
