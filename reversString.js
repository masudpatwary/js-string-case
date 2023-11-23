// function reversString(text) {
//   for (let i = 0; i < text.length; i++) {
//     const reversed = text[i];
//     console.log(reversed);
//   }
// }

// const myString = "i am a masudur rahman patwary";
// const stringResult = reversString(myString);
// console.log(stringResult);

//*! revers way to string //

// function reversString(text) {
//   let reversed = "";
//   for (let i = text.length - 1; i >= 0; i--) {
//     const elements = text[i];
//     reversed = reversed + elements;
//     console.log(elements, reversed);
//   }
//   return reversed;
// }

// const myText = "amar sonar banla, ami tomay valobasi";
// const reversedResult = reversString(myText);
// console.log(reversedResult);

//*! revers way to stringSplit //

function riversString(string) {
  const ward = string.split(" ");
  const result = [];
  for (let i = ward.length - 1; i >= 0; i--) {
    const elements = ward[i];
    result.push(elements);
  }
  const reversed = result.join(" ");
  return reversed;
}

const myText = "tumi bondhu kala pakhi";
const reversResult = riversString(myText);
console.log(reversResult);
