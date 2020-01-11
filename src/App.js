import React, { useState,  useEffect, Component } from 'react';


import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import HomeDash from "./screens/HomeDash";
import "./style.css";
import './App.css'
import SignIn from './screens/SignIn'



function App() {

    return (
        <Router>
            <Route path="/" exact component={SignIn} />
            <Route path="/HomeDash/" exact component={HomeDash} />


        </Router>
    );
}

export default App;


