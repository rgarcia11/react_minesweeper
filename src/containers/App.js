import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  
  state = {
    board: [
      [{value: 0, show: 0, mine: 0}, {value: 1, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 1, show: 0, mine: 0}, {value: 1, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}]
    ],
    numberOfMines: 10
  };

  mineRandomizer = ( minesToPlace ) => minesToPlace.map( (mine) => {
    const coords = this.randomXY();
    // set board position to mine: 1
    // set neighbouring tiles to +1 on their value
  } ); 

  placeMines = ( numberOfMines ) => {
    const minesToPlace = new Array(numberOfMines);
    this.mineRandomizer(minesToPlace);
  }

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
        <button
          onClick={this.placeMines.bind(this, 10)} />
      </div>
    );
  }
}

export default App;
