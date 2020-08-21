import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <Link to="/"><h4>Home</h4></Link>
        <Link to="/about"><div>About</div></Link>
        <Link to="/contact"><div>Contact</div></Link>
        <Link to="/strategy"><div>Strategy</div></Link>
      </div>
    )
  }
}
