import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { MdAndroid } from "react-icons/md";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="centered">

          <h1>START YOUR MARKETING JOURNEY</h1>
          <h3>We are Marketing experts to support you on your way to digitalization. Together we generate added value from your data with the use of Marketing Power.</h3>
          <Link to="/strategy"><button>Our Services</button></Link>
          
           
        </div>

        <section className="mainContent">

          <div className="firstContent">
            {/* <img /> */}
            <MdAndroid />
            <h3>Data & AI Consulting</h3>
            <p>Suchen Sie Beratung und Unterstützing auf Ihrem Weg zur datengetriebenen Organistation?</p>
            <p>Wir Beraten Sie dazu in Form von Workshops und Einzelcoachings</p>
            <button>More</button>
          </div>

          <div className="secondContent">
            {/* <img /> */}
            <MdAndroid />
            <h3>DataOps & AI Products</h3>
            <p>Suchen Sie Beratung und Unterstützing auf Ihrem Weg zur datengetriebenen Organistation?</p>
            <p>Wir Beraten Sie dazu in Form von Workshops und Einzelcoachings</p>
            <button>More</button>
          </div>

          <div className="thirdContent">
            {/* <img /> */}
            <MdAndroid />
            <h3>Data Academy & Marketing</h3>
            <p>Suchen Sie Beratung und Unterstützing auf Ihrem Weg zur datengetriebenen Organistation?</p>
            <p>Wir Beraten Sie dazu in Form von Workshops und Einzelcoachings</p>
            <button>More</button>
          </div>

          <div className="forthContent">
            {/* <img /> */}
            <MdAndroid />
            <h3>Data & AI Consulting</h3>
            <p>Suchen Sie Beratung und Unterstützing auf Ihrem Weg zur datengetriebenen Organistation?</p>
            <p>Wir Beraten Sie dazu in Form von Workshops und Einzelcoachings</p>
            <button>More</button>
          </div>

        </section>
      </>
    )
  }
}
