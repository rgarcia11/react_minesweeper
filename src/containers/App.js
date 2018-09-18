import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  
  state = {
    board: [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ]
  };

  render() {

    return (
      <div className="App">
        <h1>Minesweeper!</h1>
        <Board
          rows={this.state.board} 
          key="board"/>
      </div>
    );
  }
}

export default App;
