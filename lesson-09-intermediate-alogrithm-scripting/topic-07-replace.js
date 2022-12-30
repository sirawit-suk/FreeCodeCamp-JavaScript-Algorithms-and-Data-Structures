function myReplace(str, before, after) {
  const isUpperCase = /^[A-Z]/.test(before);

  return str.replace(
    before,
    isUpperCase ? after[0].toUpperCase() + after.slice(1) : after.toLowerCase()
  );
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
