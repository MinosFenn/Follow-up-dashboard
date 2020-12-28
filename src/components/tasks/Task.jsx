import React from "react";
import moment from "moment";
import Check from "../../components/tasks/Check.jsx"
import { removeTask, toggleChecked } from "../../actions/taskActions";
import { connect } from "react-redux";
import userEvent from "@testing-library/user-event";

const Task = ({ task, removeTask, toggleChecked, email }) => {
  const handleRemove = (task) => {
    removeTask(task);
  };

  const handleCheck = (task) => {
    toggleChecked(task);
  };

  return (
    <>
      <tr>
        <th scope="row">{task.task}</th>
        <td>${task.email}</td>
        <td>{moment(task.date.toDate()).calendar()}</td>
        <td>
         <Check onClick={() => handleCheck(task)} checked = {task.checked}/>
        </td>
        <td>eeee</td>
        {/* To work on later on
         <td>
          <span
            class="material-icons text-archived"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            exit_to_app
          </span>
        </td> */}
        <td>
          <span
            class="material-icons text-deleted"
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(task)}
          >
            delete
          </span>
        </td>
      </tr>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state)
  const email = state.firebase.auth.email 
  return{
    email: email,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeTask: (task) => dispatch(removeTask(task)),
    toggleChecked: (task) => dispatch(toggleChecked(task))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
