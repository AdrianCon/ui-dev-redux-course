import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Todos from "./Todos";
import Goals from "./Goals";

function App(props) {
  const { dispatch, loading } = props;

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  if (loading === true) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <Todos />
      <Goals />
    </div>
  );
}

export default connect((state) => ({
  loading: state.loading,
}))(App);
