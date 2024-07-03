const http = require("http");
const url = require("url");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  const arithmetic = require("./arithmetic");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  switch (pathname) {
    case "/":
      res.end("Hello World!");
      break;
    case "/calculator":
      res.end(
        "Add a number (num1=...), an operator (operator=...) and another number (num2=...) to get the result.\n" +
          "\n" +
          "E.g. http://127.0.0.1:8080/calculator/?num1=4&operator=-&num2=2\n" +
          "\n" +
          "You must use '%2B' for '+'."
      );
      break;
    case "/calculator/":
      const { num1, operator, num2 } = query;
      if (!num1 || !operator || !num2) {
        res.end(`Missing numbers or operator.`);
      } else {
        res.end(arithmetic(num1, operator, num2));
      }
      break;
    default:
      res.end(`Hmm... Wrong pathway.`);
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});S
