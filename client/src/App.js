import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Strategy from './components/Strategy';
import './App.css';

function App() {
  return (
    <>

      <div>
        <Navbar />
      </div>

      <div className="centered">
          <h1>START YOUR MARKETING JOURNEY</h1>
          <h3>We are Data & AI experts and support you on your way to digitalization. Together we generate added value from your data with the use of Artificial Intelligence.</h3>
          <button>Our Services</button>
      </div>

      <Switch>
        <Route
          exact
          path='/about'
          render={props => <About  {...props} />}
        />
        <Route
          exact
          path='/contact'
          render={props => <Contact  {...props} />}
        />
        <Route
          exact
          path='/strategy'
          render={props => <Strategy  {...props} />}
        />
      </Switch>

      {/* </div> */}
    </>
  );
}

export default App;
