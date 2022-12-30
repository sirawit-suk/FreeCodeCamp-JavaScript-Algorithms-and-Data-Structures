const romanDict = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertToRoman(num) {
  let str = "";
  while (num > 0) {
    const maxNum = Math.max(
      ...Object.values(romanDict).filter((value) => value <= num)
    );
    str += Object.keys(romanDict).find((key) => romanDict[key] === maxNum);
    num -= maxNum;
  }

  return str;
}

console.log(convertToRoman(36));
console.log(convertToRoman(45));
