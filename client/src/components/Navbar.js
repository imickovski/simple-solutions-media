import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>

        <div>[SSM]<hr></hr>
          Simple Solutions Media
        </div>

        <Link to="/"><div>Services</div></Link>
        <Link to="/"><div>Solutions</div></Link>
        <Link to="/about"><div>About [SSM]</div></Link>
        <Link to="/contact"><div>Contact</div></Link>
        <Link to="/strategy"><div>Strategy</div></Link>
      </div>
    )
  }
}