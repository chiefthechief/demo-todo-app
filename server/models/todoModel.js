const mongoose = requier("mongoose");

const todoSchema = new mongoose.Schema({
   text: {
      type: String,
      required: true,
   },
});