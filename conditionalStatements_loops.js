function describeTemperature(temp) {
    if (temp < 0) return "It's freezing!";
    else if (temp <= 15) return "It's cold.";
    else if (temp <= 25) return "It's mild.";
    else return "It's warm.";
  }
  console.log(describeTemperature(-3));
  console.log(describeTemperature(10));
  console.log(describeTemperature(20));
  console.log(describeTemperature(30));
  
  // Switch version
  function describeTemperatureSwitch(temp) {
    switch (true) {
      case temp < 0:
        return "It's freezing!";
      case temp <= 15:
        return "It's cold.";
      case temp <= 25:
        return "It's mild.";
      default:
        return "It's warm.";
    }
  }
  
  /* ---------- Exercise 2 – Divisibility Check ---------- */
  function divisibilityCheck(n) {
    if (n % 2 === 0 && n % 3 === 0) return "Divisible by both.";
    else if (n % 2 === 0) return "Divisible by 2.";
    else if (n % 3 === 0) return "Divisible by 3.";
    else return "Not divisible by 2 or 3.";
  }
  
  function divisibilityCheckSwitch(n) {
    switch (true) {
      case n % 2 === 0 && n % 3 === 0:
        return "Divisible by both.";
      case n % 2 === 0:
        return "Divisible by 2.";
      case n % 3 === 0:
        return "Divisible by 3.";
      default:
        return "Not divisible by 2 or 3.";
    }
  }
  
  /* ---------- Exercise 3 – For loops ---------- */
  // 1. Print 1‑10
  for (let i = 1; i <= 10; i++) console.log(i);
  
  // 2. Even numbers 1‑20
  for (let i = 2; i <= 20; i += 2) console.log(i);
  
  // 3. Sum 1‑100
  let sum100 = 0;
  for (let i = 1; i <= 100; i++) sum100 += i;
  console.log("Sum 1‑100:", sum100);
  
  // 4. Print each element
  const nums1 = [1, 2, 3, 4, 5];
  for (const n of nums1) console.log(n);
  
  // 5. Largest number
  const nums2 = [3, 7, 2, 5, 10, 6];
  let largest = nums2[0];
  for (const n of nums2) if (n > largest) largest = n;
  console.log("Largest:", largest);
  
  /* ---------- Exercise 4 – While loops ---------- */
  // 1. Print 1‑10
  let i1 = 1;
  while (i1 <= 10) {
    console.log(i1);
    i1++;
  }
  
  // 2. Even numbers 1‑20
  let i2 = 2;
  while (i2 <= 20) {
    console.log(i2);
    i2 += 2;
  }
  
  // 3. Sum 1‑100
  let i3 = 1, sumWhile = 0;
  while (i3 <= 100) {
    sumWhile += i3;
    i3++;
  }
  console.log("Sum 1‑100 (while):", sumWhile);
  
  // 4. Multiples of 5 < 50
  let i4 = 5;
  while (i4 < 50) {
    console.log(i4);
    i4 += 5;
  }
  
  /* ---------- Exercise 5 – Do‑while loops ---------- */
  const readline = require("node:readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  // 1. Print 1‑10
  let d1 = 1;
   do {
    console.log(d1++);
  } while (d1 <= 10);
  
  // 2. Sum 1‑100
  let d2 = 1, sumDo = 0;
   do {
    sumDo += d2++;
  } while (d2 <= 100);
  console.log("Sum 1‑100 (do‑while):", sumDo);
  
  // 3. Prompt user for number > 10
  function askGreaterThan10() {
    return new Promise(resolve => {
      const ask = () => {
        readline.question("Enter a number greater than 10: ", answer => {
          const n = Number(answer);
          if (n > 10) {
            console.log("Thank you!");
            resolve(n);
          } else {
            console.log("Try again.");
            ask();
          }
        });
      };
      ask();
    });
  }
  
  // 4. Guessing game 1‑10
  async function guessingGame() {
    const target = Math.floor(Math.random() * 10) + 1;
    console.log("Guess a number between 1 and 10");
    let guess;
    do {
      guess = await new Promise(resolve =>
        readline.question("Your guess: ", ans => resolve(Number(ans)))
      );
      if (guess < target) console.log("Too low!");
      else if (guess > target) console.log("Too high!");
    } while (guess !== target);
    console.log("Correct! The number was", target);
    readline.close();
  }