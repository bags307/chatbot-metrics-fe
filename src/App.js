import React, { useState, useReducer, useEffect, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Statbox from './components/statbox/';
import DateBox from './components/dateBox'
function App() {
  const [date, setDate] = useState({dateStart:"2019-12-01", dateEnd:'2019-12-31'});

  return (
    <div className="App">
      <header className="App-header">
          <div>start:{date.dateStart}</div>
          <Statbox title='CONVERSATIONS' type='conversations' dateStart={date.dateStart} dateEnd={date.dateEnd}/>
          <Statbox title='PARTICIPANTS' type='participants' dateStart={date.dateStart} dateEnd={date.dateEnd}/>
          <DateBox setDate={setDate}></DateBox>
      </header>

    </div>
  );
}

export default App;
