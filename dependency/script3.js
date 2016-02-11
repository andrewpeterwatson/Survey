var calc = {};
(function() {
    calc.add = function(a,v) {
      return a + v;
    }
    calc.sub = function(a,b) {
      return a - b;
    }
})();
console.log(calc.add(4,5));
console.log(calc.sub(3,4));
