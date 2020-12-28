import React, { Component } from "react";
import {signIn} from "../../actions/authActions";
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"
import "../../App.css";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
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
    // console.log(this.state);
    this.props.signIn(this.state)
  };
  render() {
    // redirect user to dashboard if uid exist
    const {uid} = this.props
    if(uid) return <Redirect to="/"/>
    return (
      <>
      <div className="Sign-container">
        <form
          className="form-container"
          autoComplete="on"
          onSubmit={this.handleSubmit}
        >
          <legend>
            <h4>SignIn</h4>
          </legend>
          <div className="form-group">
            <label htmlFor="email">Enter email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Enter password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="Main-btn">
            SignIn
          </button>
        </form>
        </div>
      </>
    );
  }
}
// acess uid from props
const mapStateToProps = (state) => {
  console.log(state)
  const uid = state.firebase.auth.uid 
  return{
    uid: uid,
  }
};

const mapDispatchToProps = dispatch => {
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);