
// Input = a number
// Output = a number
// Edge Cases = 0, single digit number, all same digits
// constraints = time complexity, space complexity

let descendingOrder = function(num) {
  let digits = num.toString().split('');
    digits.forEach((char) => {
      char = Number(char);
    })
    digits.sort((a, b) => b - a);
    let newNum = digits.join('');
  return Number(newNum);
}

console.log(descendingOrder(12541)); // => 54211