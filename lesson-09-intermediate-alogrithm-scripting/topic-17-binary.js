function binaryToDecimal(binaryString) {
  let decimal = 0;
  let binaryIncrement = 1;
  for (let i = binaryString.length - 1; i >= 0; i--) {
    decimal += binaryString[i] * binaryIncrement;
    binaryIncrement *= 2;
  }
  return decimal;
}

function asciiToChar(ascii) {
  return String.fromCharCode(ascii);
}

function binaryAgent(str) {
  return str.split(" ").map((binary) => asciiToChar(binaryToDecimal(binary))).join("");
}

console.log(
  binaryAgent(
    "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
  )
);
