//import logo from './logo.svg';
import { useState } from 'react';
import React from 'react';
import Header from './Header/Header';
import User from './User/User';
import data from './data';
import './App.css';

function App() {
  const [userIndex, setUserIndex] =useState(0)

  let nextHandler = () => {
    if (userIndex == data.length -1){
      return
    }
    setUserIndex(userIndex +1)
  }

  let prevHandler = () => {
    if (userIndex == 0) {
      return
    }
    setUserIndex(userIndex -1 )
  }

  return (
    <div className="App">
      <Header />
      <User {...data[userIndex]} />
      <button onClick={prevHandler}>{'< Previous'}</button>
      <button onClick={nextHandler}>{'Next >'}</button>
  
    </div>
  );
}

export default App;
