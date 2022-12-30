const Person = function (firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  let _fullName = firstAndLast;

  this.getFullName = () => _fullName;
  this.getFirstName = () => _fullName.split(" ")[0];
  this.getLastName = () => _fullName.split(" ")[1];

  this.setFirstName = (first) => {
    _fullName = _fullName.replace(/(\w+) (\w+)/, first + " $2");
  };
  this.setLastName = (last) => {
    _fullName = _fullName.replace(/(\w+) (\w+)/, "$1 " + last);
  };
  this.setFullName = (firstAndLast) => {
    _fullName = firstAndLast;
  };
};

const bob = new Person("Bob Ross");