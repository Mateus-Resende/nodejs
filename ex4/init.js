var myClass = function(name) {
  var _string = name;

  this.printf = function () {
    console.log(_string);
  }
}

module.exports = myClass;