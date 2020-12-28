import React, { Component } from "react";
import { connect } from "react-redux";
import {addTask} from "../../actions/taskActions"

class AddTask extends Component {
  state = {
    task: "",
    checked: "false"
  };
  // target change in id specified in state and modify them
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  // save the input values
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state);
    document.getElementById("addTaskForm").reset();
    console.log(this.state);
  };
  render() {
    return (
      <>
      <div className="task-container">
        <form
        id="addTaskForm"
          className="form-container"
          autoComplete="on"
          onSubmit={this.handleSubmit}
        >
          <legend>
            <h4>AddTask</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="task">Add a task</label>
            <input
              type="text"
              className="form-control"
              id="task"
              placeholder="Enter a task"
              onChange={this.handleChange}
            />
          </div>
         
          <button type="submit" className="Main-btn">
            AddTask
          </button>
        </form>
        </div>
      </>
    );
  }
}


// send task from state
const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
}

export default connect(null, mapDispatchToProps)(AddTask);