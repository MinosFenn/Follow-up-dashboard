import React from 'react';
import Task from  "./Task";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Tasks = ({tasks}) => {
    return (
        <>
            <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Client</th>
      <th scope="col">Added On</th>
      <th scope="col">Status</th>
      <th scope="col">Updated By</th>
      <th scope="col">Archive</th>
      <th scope="col">Delete</th>

    </tr>
  </thead>
  <tbody>
  {/* map all tasks added */}
  {tasks && tasks.map((task) =>   <Task task={task} key={task.id} />
)}

  </tbody>
</table>
        </>
    )
}

// allow us to access data
const mapStateToProps = (state) => {
    console.log(state);
    const tasks = state.firestore.ordered.tasks;
    return {
      tasks: tasks,
    };
  };
  export default compose(
    //   add component to be loaded here
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "tasks",
        orderBy: ["date", "desc"],
      },
    ])
  )(Tasks);

