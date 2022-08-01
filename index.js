const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://shkim:z1z2z3@boilerplate.4wze8.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("접속성공"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Exam port ${port}`));
