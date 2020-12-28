import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavItems from './NavItems'
import {connect} from "react-redux"
import "../../App.css";

const NavBar = () => {
    return (
        <>
        <nav className="navbar">

        <div className="Content-container">
        <Link to="/" className="navbar-link">

          <div className="Main-header text-3">Follow-up</div>
          </Link>

        </div>

            <NavItems/>
        </nav>
        </>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
}
export default connect(mapStateToProps)(NavBar)