import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Strategy from './components/Strategy';
import Main from './components/Main'
import './App.css';

function App() {
    return ( <
            >
            <
            div >
            <
            Navbar / >
            <
            /div>

            <
            Switch >
            <
            Route exact path = '/'
            render = {
                props => < Main {...props }
                />} /
                >

                <
                Route
                exact
                path = '/about'
                render = {
                    props => < About {...props }
                    />} /
                    >
                    <
                    Route
                    exact
                    path = '/contact'
                    render = {
                        props => < Contact {...props }
                        />} /
                        >
                        <
                        Route
                        exact
                        path = '/strategy'
                        render = {
                            props => < Strategy {...props }
                            />} /
                            >
                            <
                            /Switch>

                            { /* </div> */ } <
                            />
                        );
                    }

                    export default App;