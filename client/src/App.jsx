import { useState, useEffect } from 'react';
import Item from "./components/item.jsx";
import axios from "axios";
import './App.css'

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/get-todo")
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  })
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="write something"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div className="add">Add</div>
        </div>
        <div className="list">
          <Item />
        </div>
      </div>
    </div>
  );
};

export default App
