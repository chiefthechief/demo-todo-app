const toDoModel = require("../models/toDoModel");

const index = (req, res) => {
   res.send("we are live on the server")
}
async function getToDo(req, res) {
   const ToDo = await toDoModel.find();
   res.send(ToDo);
   res.status(404).end();
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
   index,
   getToDo,
   saveToDo,
   deleteToDo,
   updateToDo,
}