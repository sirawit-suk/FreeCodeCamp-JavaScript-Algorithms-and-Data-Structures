let funModule = (() => ({
  isCuteMixin: function (obj) {
    obj.isCute = function () {
      return true;
    };
  },
  singMixin: function (obj) {
    obj.sing = function () {
      console.log("Singing to an awesome tune");
    };
  },
}))();

let dummy = {};

funModule.singMixin(dummy);
dummy.sing();
