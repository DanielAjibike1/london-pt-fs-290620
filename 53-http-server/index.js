const http = require("http");
const { create } = require("domain");

const users = [
  {
    id: 1,
    name: "Vasile",
  },
  {
    id: 2,
    name: "Sam",
  },
  {
    id: 3,
    name: "Alex",
  },
  {
    id: 4,
    name: "Tom",
  },
];

const createServer = () => {
  return http.createServer((req, res) => {
    console.log(req);

    res.end();
  });
};

const server = createServer();

server.listen(3000, () => {
  console.log("Listen on port 3000");
});
