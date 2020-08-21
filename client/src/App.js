import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Strategy from './components/Strategy';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Solutions Media</h1>
      <Navbar />

      <Switch>
        <Route
          exact
          path='/'
          render={props => <App  {...props}/>}
        />
        <Route
          exact
          path='/about'
          render={props => <About  {...props}/>}
        />
        <Route
          exact
          path='/contact'
          render={props => <Contact  {...props}/>}
        />
        <Route
          exact
          path='/strategy'
          render={props => <Strategy  {...props}/>}
        />
      </Switch>

    </div>
  );
}

export default App;
