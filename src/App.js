import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Todo from './todoFrom';
import Style from './style';
import Box from './box';
import DashedB from './module/module';
import Progress from './progress/progress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Todo></Todo>
        <div>
            <Style></Style>
            <Box></Box>
            <DashedB></DashedB>
            <Progress></Progress>
        </div>
      </div>
    );
  }
}

export default App;
