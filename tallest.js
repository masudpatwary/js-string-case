// function maxArray(number) {
//   let leargest = number[0];
//   for (let i = 0; i < number.length; i++) {
//     const index = i;
//     const elements = number[index];
//     if (elements < leargest) {
//       leargest = elements;
//     }
//   }
//   return leargest;
// }

// const heightNumber = [86, 92, 876, 21, 385, 92, 463, 82, 86, 1];
// const tallest = maxArray(heightNumber);
// console.log(tallest);

function maxArray(numbers) {
  let lergest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const elements = numbers[i];
    if (elements < lergest) {
      lergest = elements;
    }
  }
  return lergest;
}

const heightNumber = [64, 687, 4, 9, 6, 58, 98, 8550, 3, 8, 86, 5];
const tallest = maxArray(heightNumber);
console.log(tallest);


