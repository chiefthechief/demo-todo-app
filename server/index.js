const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes/todoRoutes");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(
      app.listen(5000, () => {
         console.log("connected to database and listening on port 5000");
      })
   )
   .catch (err => console.log(err));