function rot13(str) {
  return str
    .split("")
    .map((c) => {
      // only alphabets
      if (c.match(/[A-Z]/i)) {
        let newAscii = c.charCodeAt(0) - 13; // rot13
        if (newAscii < 65) { // 'A' === 65
          newAscii += 26; // rotate alphabets
        }
        return String.fromCharCode(newAscii);
      } else {
        return c;
      }
    })
    .join("");
}

console.log(rot13("SERR PBQR PNZC"));
