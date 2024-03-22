import React from "react";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import { connect } from "react-redux";

function Goals(props) {
  const input = React.createRef();

  const addItem = (e) => {
    e.preventDefault();
    const value = input.current.value;
    props.dispatch(handleAddGoal(value, () => (input.current.value = "")));
  };

  const removeItem = (goal) => {
    props.dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals</h1>
      <input ref={input} type="text" placeholder="Add Goal" />
      <button onClick={addItem}>Add Goal</button>
      <List items={props.goals} remove={removeItem} />
    </div>
  );
}

export default connect((state) => ({
  goals: state.goals,
}))(Goals);
