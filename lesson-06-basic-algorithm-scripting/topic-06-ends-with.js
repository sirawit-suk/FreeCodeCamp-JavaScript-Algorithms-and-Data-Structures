function confirmEnding(str, target) {
  const regExp = new RegExp(target + "$");
  return regExp.test(str);
}

confirmEnding("Bastian", "n");
