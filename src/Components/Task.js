import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../actions/actions";
import { bindActionCreators } from "redux";

const Task = (props) => {
  return (
    <tr
      style={{
        background: "linear-gradient(to right,#00c6ff,#0072ff)",
        border: "2px solid white",
      }}
    >
      <td
        style={{
          color: "black",
        }}
      >
        {props.task}
      </td>
      <td>
        <button
          onClick={() => {
            props.deleteTask(props.id);
          }}
          style={{
            border: "none",
            background: "linear-gradient(to right,#FFB75E,#ED8F03)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteTask }, dispatch);
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
