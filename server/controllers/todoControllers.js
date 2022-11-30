const toDoModel = require("../models/todoModel");

const getToDo = async (req, res) => {
   const Todo = await toDoModel.find();
   res.send(Todo);
}
const saveToDo = async (req, res) => {
   const { text } = req.body;
   toDoModel
      .create({ text })
      .then(() => res.set(201).send("added successfully"))
      .catch(err => console.log(err))
}
const deleteToDo = (req, res) => {
   const { _id } = req.body;
   toDoModel
      .findByIdAndDelete(_id)
      .then(() => res.set(201).send("deleted successfully"))
      .catch(err => console.log(err));
}
const updateToDo = (req, res) => {
   const { _id, text } = req.body;
   toDoModel
      .findByIdAndUpdate(_id, text)
      .then(() => res.set(201).send("updated successfully"))
      .catch(err => console.log(err));
}

module.exports = {
   getToDo,
   saveToDo,
   deleteToDo,
   updateToDo,
}