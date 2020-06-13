import React, { useRef } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTask } from "../actions/actions";

const Taskbar = (props) => {
  let inputRef = useRef(null);

  let handleValue = () => {
    props.addTask(inputRef.current.value);
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Enter your Task" />
      <button
        onClick={() => {
          handleValue();
        }}
        style={{
          marginLeft: "10px",
          background: "linear-gradient(to right,#00F260,#0575E6)",
          padding: "10px",
          border: "none",
          borderRadius: "10px",
        }}
      >
        Submit
      </button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask }, dispatch);
}
function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Taskbar);
