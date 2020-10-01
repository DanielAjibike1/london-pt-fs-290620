const calc = {
  value: 0,
  add: function (num) {
    this.value += num;
    return this;
  },
  subtract: function (num) {
    this.value -= num;
    return this;
  },
  divide: function (num) {
    this.value /= num;
    return this;
  },
  multiply: function (num) {
    this.value *= num;
    return this;
  },
  total: function () {
    const finalValue = this.value;
    this.value = 0;

    return finalValue;
  },
};

console.log(calc.add(4).subtract(3).multiply(8).divide(2).total());
