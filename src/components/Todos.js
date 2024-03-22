import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";

function Todos(props) {
  const input = React.createRef("");

  const addItem = (e) => {
    e.preventDefault();
    const value = input.current;
    input.current = "";
    props.dispatch(handleAddTodo(value, () => (input.current = "")));
  };

  const removeItem = (todo) => {
    props.dispatch(handleDeleteTodo(todo));
  };

  const toggleItem = (id) => {
    props.dispatch(handleToggle(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        onChange={(e) => (input.current = e.target.value)}
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} toggleItem={toggleItem} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
