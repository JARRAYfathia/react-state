
import './App.css';
import Profile from './Components/Profile';
import Timer from './Components/Timer';
import React, { Component } from 'react'


export class App extends Component {
  render() {
    return (
      <div className='App'>
        <Timer/>
        <Profile/>
      </div>
    )
  }
}

export default App
