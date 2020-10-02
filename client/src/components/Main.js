import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class About extends Component {
  render() {
    return (
      <div className="centered">
        <h1>START YOUR MARKETING JOURNEY</h1>
        <h3>We are Marketing experts to support you on your way to digitalization. Together we generate added value from your data with the use of Artificial Intelligence.</h3>
        <Link to="/strategy"><button>Our Services</button></Link>
        <br></br>
        <div>
          PLACE FOR MORE TEXT AND CONTENT FOR THE MAIN PAGE
        </div>

      </div>


    )
  }
}
