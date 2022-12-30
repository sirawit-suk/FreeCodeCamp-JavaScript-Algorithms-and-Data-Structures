function spinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .split(/\s+|_/)
    .join("-")
    .toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
