import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import "../App.css";

const TaskList = (props) => {
  return (
    <div>
      <table
        style={{
          color: "white",
          borderCollapse: "collapse",
          border: "1px solid white",
          marginTop: "50px",
        }}
      >
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem("items")) !== null ? (
            JSON.parse(localStorage.getItem("items")).map((task, index) => {
              return <Task key={index} task={task} id={index} />;
            })
          ) : (
            <></>
          )}
          {/* { JSON.parse(localstorage.get("items"))?props.tasks.map((task, index) => {
            return <Task key={index} task={task} id={index} />;
          })} */}
        </tbody>
      </table>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  };
}

export default connect(mapStateToProps)(TaskList);
