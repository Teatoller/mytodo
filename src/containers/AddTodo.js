import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

let AddTodo = ({ dispatch }) => {
  let input; // the input variable which will hold reference to the input element

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            // using the input variable
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node; // assign the node reference to the input variable
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
