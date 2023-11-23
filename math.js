//*! thita power math //

const math = Math.pow(3, 8);
// console.log(math);

// *!    +/- bad only number dekhabe//

const number1 = 25;
const number2 = 50;
const gap = Math.abs(number1 - number2);
// console.log(gap);
if (gap < 10) {
  //   console.log("I will marray you");
} else {
  //   console.log("i will not marray you");
}

//*! purno songkha //

const number = 2.4464645;
// console.log(Math.round(number));

//*! Ceil //

const number3 = 54.000001;
// console.log(Math.ceil(number3));

//*! floor //

const number4 = 54.000001;
// console.log(Math.floor(number4));

//*! Random //

for (i = 0; i < 10; i++) {
  const random = Math.round(Math.random() * 6);
  console.log(random);
}
