import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div>[SSM]<hr></hr>
          Simple Solutions Media
        </div>

        <div><Link to="/">Services</Link></div>
        <div><Link to="/">Solutions</Link></div>
        <div><Link to="/about">About [SSM]</Link></div>
        <div><Link to="/contact">Contact</Link></div>
        <div><Link to="/strategy">Strategy</Link></div>
      </div>
    )
  }
}