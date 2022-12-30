function translatePigLatin(str) {
  const consonantRegExp = /^[^aeiou]+/gi;
  const firstGroup = str.match(consonantRegExp);

  return firstGroup !== null
    ? str.replace(consonantRegExp, "").concat(firstGroup + "ay")
    : str + "way";
}

console.log(translatePigLatin("california"));
console.log(translatePigLatin("rhythm"));
