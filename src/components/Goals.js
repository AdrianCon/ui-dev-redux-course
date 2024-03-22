import React from "react";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import { useSelector, useDispatch } from "react-redux";

export default function Goals() {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  const input = React.createRef();

  const addItem = (e) => {
    e.preventDefault();
    const value = input.current.value;
    dispatch(handleAddGoal(value, () => (input.current.value = "")));
  };

  const removeItem = (goal) => {
    dispatch(handleDeleteGoal(goal));
  };

  return (
    <div>
      <h1>Goals</h1>
      <input ref={input} type="text" placeholder="Add Goal" />
      <button onClick={addItem}>Add Goal</button>
      <List items={goals} remove={removeItem} />
    </div>
  );
}
