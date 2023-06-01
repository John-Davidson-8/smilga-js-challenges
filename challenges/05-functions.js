/*
## Functions #5

1. Create "calculateTotal" function
2. Add two parameters subTotal, tax
3. return sum of parameterers

4. Create 3 vars "order1", "order2", and "order3"
5. Call calculateResult, pass in some values and assign result to each order
6. Log all three orders
7. Refactor "calculateTotal" to function expression

*/

function calculateTotal(subTotal, tax) {
  const total = subTotal + tax;
  // return total;
  return subTotal + tax;
}
// console.log(calculateTotal(200, 20));

const order1 = calculateTotal(100, 10);
const order2 = calculateTotal(50, 5);
const order3 = calculateTotal(25, 5);

console.log(order1, order2, order3);
