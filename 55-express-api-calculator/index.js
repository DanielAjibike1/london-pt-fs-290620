const express = require("express");
const app = express();

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

app.get("/double/:num", (req, res) => {
  const number = parseInt(req.params.num);

  const response = { result: calc.add(number).multiply(2).total() };

  res.json(response);
});

app.get("/square/:num", (req, res) => {
  const number = parseInt(req.params.num);

  const response = { result: calc.add(number).multiply(number).total() };

  res.json(response);
});

app.get("/:num1/:operation/:num2", (req, res) => {
  const num1 = parseInt(req.params.num1);
  const operation = req.params.operation;
  const num2 = parseInt(req.params.num2);

  let response = { message: "Bad request" };

  if (isNaN(num1) && isNaN(num2)) {
    switch (operation) {
      case "+":
        response = { result: calc.add(num1).add(num2).total() };
        break;
      case "-":
        response = { result: calc.add(num1).subtract(num2).total() };
        break;
      case "divide":
        response = { result: calc.add(num1).divide(num2).total() };
        break;
      case "*":
        response = { result: calc.add(num1).multiply(num2).total() };
        break;
    }
  }

  res.json(response);
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
