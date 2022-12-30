const specialHTML = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function convertHTML(str) {
  return str
    .split("")
    .map((c) => (specialHTML[c] ? specialHTML[c] : c))
    .join("");
}

console.log(convertHTML("Dolce & Gabbana"));
