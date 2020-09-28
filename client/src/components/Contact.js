import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaInstagram } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Contact extends Component {
  static defaultProps = {
    center: {
      lat: 41.99,
      lng: 21.42
    },
    zoom: 14
  };

  handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };

  render() {
    return (
      <div className="Contact">
        <div className="ContactInfo">
          <div>
            How to Reach us
          </div>
          <div>
            Our Headquarters
          </div>
          <div>
            Simple Media Solutions
          </div>
          <div>
            1000 Skopje
          </div>
          <hr></hr>
          <div>
            Send Email here: <br></br>
            simple.media.solutions@sms.com
          </div>
          <div>
            Tel: +49 163 879 8214
          </div>
          <ul>
            <li><FaInstagram /></li>
            <li><AiFillFacebook /></li>
          </ul>
        </div>
        {/* Place for Icons for Social Media */}


        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            // bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>


      </div>
    )
  }
}


