import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Login from './Login'
import Register from './Register'
export default function TaskOne() {
  return (
    <div>
     
      <Router>
        <Link to ="/Login">Login</Link>
        <Link to="/Register">Register</Link>
        <switch>
          <Route path="/Login">
            <Login/>
          </Route>
          <Route path="/Register">
            <Register/>
          </Route>
        </switch>
      </Router>
    </div>
  )
}
