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
    const value = input.current.value;
    props.dispatch(handleAddTodo(value, () => (input.current.value = "")));
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
      <input ref={input} type="text" placeholder="Add Todo" />
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} toggleItem={toggleItem} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
