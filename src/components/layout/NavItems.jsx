import React, { Component } from "react";
import { Link } from "react-router-dom";
import {signOut} from "../../actions/authActions";
import {connect} from "react-redux"; 

const NavItems = ({signOut, uid}) => {
  if(uid){
    return (
      <div className="navbar-container">
      <Link to="/signin" className="navbar-link" onClick={signOut}>
      SignOut
    </Link>
    </div>
    )
  }
  else {
    return (
    <>
      <div className="navbar-container">

      <Link to="/signup" className="navbar-link">
        SignUp
      </Link>
      <Link to="/signin" className="navbar-link">
        SignIn
      </Link>
      </div>

    </>
  );
};
}

const mapStateToProps = state =>{
  const uid = state.firebase.auth.uid
  return{
    uid: uid
}
}

const mapsDispatchToProps = (dispatch) =>{
  return{
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapsDispatchToProps)(NavItems);
