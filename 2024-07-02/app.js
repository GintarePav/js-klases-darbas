const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");

let product = fs.readFileSync("./data/products.json", "utf-8"); // skaito
product = JSON.parse(product);

// Create server:

const server = http.createServer((req, res) => {
  const filterFunction = require("./modules/filterFunction");
  const { pathname, query } = url.parse(req.url, true);
  console.log(pathname);
  switch (pathname) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>This is home.</h1>");
      break;
    case "/api/products":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
      break;
    case "/api/product":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product[query.id]));
      break;
    case "/api/product/search":
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(filterFunction(product, query.name)));
      break;
    default:
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Page not found</h1>");
      break;
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server listening on port 8000");
});

//http://127.0.0.1:8000/
