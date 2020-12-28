import React from 'react'
import AddTask from '../tasks/AddTask'
import Tasks from '../tasks/Tasks'
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

const Dashboard = ({uid}) => {
    if(!uid) return <Redirect to="/signIn"/>
    return (
        <>
        <div className="Dashboard-container">
{/* <h2 className="Second-header">Dashboard</h2> */}
<AddTask />
<Tasks />
</div>
</>
    )
}

const mapStateToProps = state =>{
    const uid = state.firebase.auth.uid
    return{
      uid: uid
  }
  }

export default connect(mapStateToProps)(Dashboard);