function oddishOrEvenish(num) {
  num += "";
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num.charAt(i));
  }
  if (sum % 2 === 0) {
    return "Even";
  }
  return "Odd";
}

console.log(oddishOrEvenish(4433));
