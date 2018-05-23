import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {

  render() {
    return (
      <header className="main-header">
        <h1 class="welcome">Welcome to HottBlock</h1>
        {/* <p>Your token is {this.props.token}</p> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/signin">Signin</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}