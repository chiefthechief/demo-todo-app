const { Router } = require("express");
const { index, getToDo, saveToDo, deleteToDo, updateToDo } = require("../controllers/toDoControllers")
const router = Router();

router.get("/", index)
router.get("/get-todo", getToDo);
router.post("/save-todo", saveToDo);
router.post("delete-todo", deleteToDo);
router.post("/update-todo", updateToDo);

module.exports = router;