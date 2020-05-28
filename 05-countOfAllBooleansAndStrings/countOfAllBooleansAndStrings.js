function countOfAllBooleansAndStrings(arr) {
   count = 0;
   var check_val;
   for (check_val of arr) {
     if (typeof check_val === "boolean" || typeof(check_val)==="string") {
       count++;
     }
   }
   return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;