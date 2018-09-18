import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  
  state = {
    board: [
      [{value: 0, show: 0, mine: 1}, {value: 1, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 1, show: 0, mine: 0}, {value: 1, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}]
    ]
  };

  clickHandler = ( row, column ) => {
    console.log(`clicked from row ${row} and column ${column}`);
    const currentBoard = [...this.state.board];
    currentBoard[row][column].show = 1;
    this.setState( { board: currentBoard } );
    console.log(this.state.board);
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper!</h1>
        <Board
          rows={this.state.board}
          key="board"
          tileClick={this.clickHandler}/>
      </div>
    );
  }
}

export default App;
