import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>

        {/* Logo Image */}
        {/* <Link to="/">
          <div>
            <img src={"https://scontent-ber1-1.xx.fbcdn.net/v/t1.15752-9/p1080x2048/119237924_668337553888919_489692955869908853_n.png?_nc_cat=102&_nc_sid=b96e70&_nc_eui2=AeFLqdMvIJAX6tKDTeXVfaHmFX7tZrE_PhMVfu1msT8-E4H67WD2tsBjlvSv4rE2JvE&_nc_ohc=vCwAM3L5ROUAX8fX6AG&_nc_ht=scontent-ber1-1.xx&oh=503b5293af4d58896333f85aeec26f43&oe=5F834386"} />
          </div>
        </Link> */}

        <div><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>[Simple Media Solutions]</Link></div>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white'  }}>About [SMS]</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white'  }}>Contact</Link>
        <Link to="/strategy" style={{ textDecoration: 'none', color: 'white'  }}>Strategy</Link>


      </div>
    )
  }
}