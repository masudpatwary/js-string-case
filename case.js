//*! lowerCase //

const lyrics =
  "Tumi bondhu kala Pakhi ami jeno ki, bosonto kale tomay bolte parini";
const serchString = "Parini";
const lyricsLowercase = lyrics.toLowerCase();
const serchStringLowercase = serchString.toLowerCase();
const doesExist = lyricsLowercase.includes(serchStringLowercase);
console.log(doesExist);
const oneline = lyrics.toLowerCase().includes(serchString.toLowerCase());
console.log(oneline);

// *!indexOf String

console.log(lyrics.indexOf("Pakhi"));
console.log(lyrics.startsWith("Tumi"));
console.log(lyrics.endsWith("parini"));

//*! includes the other optin

if (lyrics.indexOf("bondhu") !== -1) {
  console.log("exidt inside the string");
} else {
  console.log("its not defined");
}
