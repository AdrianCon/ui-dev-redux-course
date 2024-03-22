import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const input = React.createRef("");

  const addItem = (e) => {
    e.preventDefault();
    const value = input.current.value;
    dispatch(handleAddTodo(value, () => (input.current.value = "")));
  };

  const removeItem = (todo) => {
    dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    dispatch(handleToggle(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input ref={input} type="text" placeholder="Add Todo" />
      <button onClick={addItem}>Add Todo</button>
      <List items={todos} toggleItem={toggleItem} remove={removeItem} />
    </div>
  );
}
