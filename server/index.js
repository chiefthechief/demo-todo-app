const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/toDoRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(console.log("connected to database"))
   .then(app.listen(5000), () => {
      console.log("server is listening on port 5000");
   })
   .catch(err => console.log(err));