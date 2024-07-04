const app = require("./app");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" }); // kad butu galima is config.env paimti info

const mongoose = require("mongoose");

const port = process.env.PORT;

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then((con) => {
    console.log("Connected to DB.");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Express started; see http://localhost:3000/");
});
