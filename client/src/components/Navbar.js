import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div>[SSM]<hr></hr>
          simple solutions media
        </div>

        <div><Link to="/">Home</Link></div>
        <div> <Link to="/about">About</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/strategy">Strategy</Link></div>
      </div>
    )
  }
}