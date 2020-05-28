class MySolution {
  sum = 0;
  countDownSum(num) {
    //summation formula    
    // sum = (Math.pow(num, 2) + num) / 2
    
    if (num >= 1) {
      this.sum = this.sum + num;
      this.countDownSum(num-1);
    }    
    return this.sum;
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;