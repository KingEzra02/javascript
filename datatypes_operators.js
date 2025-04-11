// Exercise 1 – Numbers
const wholeNumber = 42;
const floatingNumber = 3.14159;

// arithmetic operators with another number (e.g. 5)
console.log("Add:", wholeNumber + 5);
console.log("Sub:", wholeNumber - 5);
console.log("Mul:", wholeNumber * 5);
console.log("Div:", wholeNumber / 5);
console.log("Mod:", wholeNumber % 5);
console.log("Exp:", wholeNumber ** 2);

console.log(wholeNumber, floatingNumber);

// Exercise 2 – Boolean & Operators
const cmp1 = 7 > 3;      // true
const cmp2 = 10 === 5;   // false
console.log(cmp1, cmp2);

// x and y
const x = 8;
const y = 12;
console.log("x > y:", x > y);
console.log("x <= y:", x <= y);
console.log("x == y:", x == y);
console.log("x != y:", x != y);

// logical operators
const a = true;
const b = false;
console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// assignment operators on p
let p = 10;
p += 3;  console.log("p += 3 =>", p);
p -= 2;  console.log("p -= 2 =>", p);
p *= 4;  console.log("p *= 4 =>", p);
p /= 5;  console.log("p /= 5 =>", p);
p %= 3;  console.log("p %= 3 =>", p);