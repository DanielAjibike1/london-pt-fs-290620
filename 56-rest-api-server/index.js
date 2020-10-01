const express = require("express");
const fs = require("fs");
const app = express();

app.listen("3000", () => {
  console.log("Listening on port 3000...");
});

app.get("/users", (req, res) => {
  const dbUsers = fs.readFileSync("./db/users.json");
  res.json(dbUsers);
});

app.post("/users", (req, res) => {
  const dbUsers = fs.readFileSync("./db/users.json");
  let parseUsers = JSON.parse(dbUsers);
  const newUser = JSON.parse(req.body);

  parseUsers.push(newUser);

  fs.writeFileSync("./db/users.json", JSON.stringify(parseUsers));
  res.json(newUser);
});

//USER ID

app.get("/user/:id", (req, res) => {
  const dbUsers = fs.readFileSync("./db/users.json");
  const parseUsers = JSON.parse(dbUsers);

  const userID = parseInt(req.params.id);

  const selectedUser = parseUsers.find((user) => user.id === userID);

  res.json(selectedUser);
});

app.patch("user/:id", (req, res) => {
  const dbUsers = fs.readFileSync("./db/users.json");
  const parseUsers = JSON.parse(dbUsers);
  const pushedData = JSON.parse(req.body);
  const userID = parseInt(req.params.id);

  const selectedUserIndex = parseUsers.findIndex((user) => user.id === userID);

  parseUsers[selectedUserIndex] = {
    ...parseUsers[selectedUserIndex],
    ...pushedData,
  };

  fs.writeFileSync("./db/users.json", JSON.stringify(parseUsers));

  res.json(parseUsers[selectedUserIndex]);
});

app.delete("/user/:id", (req, res) => {
  const dbUsers = fs.readFileSync("./db/users.json");
  const parseUsers = JSON.parse(dbUsers);
  const userID = parseInt(req.params.id);

  const filteredUsers = parseUsers.filter((user) => user.id === userID);

  fs.writeFileSync("./db/users.json", JSON.stringify(filteredUsers));

  res.json(filteredUsers);
});

app.get("/orders?userId=:id", (req, res) => {
  console.log(req);
});

app.get("/orders", (req, res) => {
  const dbOrders = fs.readFileSync("./db/orders.json");
  res.json(dbOrders);
});

app.post("/orders", (req, res) => {
  const dbOrders = fs.readFileSync("./db/orders.json");
  const parseOrders = JSON.parse(dbOrders);
  const newOrders = JSON.parse(req.body);

  parseOrders.push(newOrders);

  fs.writeFileSync("./db/orders.json", JSON.stringify(parseOrders));

  res.json(newOrder);
});

app.get("/orders/:id", (req, res) => {
  const dbOrders = fs.readFileSync("./db/orders.json");
  const parseOrders = JSON.parse(dbOrders);
  const orderID = parseInt(req.params.id);

  const selectedOrder = parseOrders.find((order) => order.id === orderID);

  res.json(selectedOrder);
});

app.patch("/orders/:id", (req, res) => {
  const dbOrders = fs.readFileSync("./db/orders.json");
  const parseOrders = JSON.parse(dbOrders);
  const newOrderData = JSON.parse(req.body);
  const orderID = parseInt(req.params.id);

  const selectedOrderIndex = parseOrders.findIndex(
    (order) => order.id === orderID
  );

  parseOrders[selectedOrderIndex] = {
    ...parseOrders[selectedOrderIndex],
    ...newOrderData,
  };

  fs.writeFileSync("./db/orders.json", JSON.stringify(parseOrders));

  res.json(parseOrders[selectedOrderIndex]);
});

app.delete("/orders/:id", (req, res) => {
  const dbOrders = fs.readFileSync("./db/orders.json");
  const parseOrders = JSON.parse(dbOrders);
  const orderID = parseInt(req.params.id);

  const selectedOrder = parseOrders.filter((order) => order.id === orderID);

  fs.writeFileSync("./db/orders.json", JSON.stringify(selectedOrder));

  res.json(selectedOrder);
});
