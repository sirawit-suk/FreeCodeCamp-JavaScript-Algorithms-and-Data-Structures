const pairs = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function pairElement(str) {
  return str.split("").map((char) => [char, pairs[char]]);
}

console.log(pairElement("GCG"));
