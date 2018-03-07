import React, { Component } from 'react';
import Header from './components/header'
import Image from './components/image'
import Profile from './components/profile'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Image />
        <Profile />
      </div>
    );
  }
}

export default App;
