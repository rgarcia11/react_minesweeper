import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  
  state = {
    board: [
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}],
      [{value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}, {value: 0, show: 0, mine: 0}]
    ],
    numberOfMines: 10,
    mineLocations: [],
    rows: 5,
    columns: 5
  };

  updatableTile = ( row, col, currentRow, currentCol ) => {
    return (!(currentRow === row && currentCol === col)) && currentRow < this.state.rows && currentRow >= 0 && currentCol < this.state.columns && currentCol >= 0;
  }

  offset = ( row, col ) => {
    const indexesToUpdate = [];
    let currentRow = row - 1;
    while ( currentRow <= row + 1 ) {
      let currentCol = col - 1;
      while ( currentCol <= col + 1 ) {
        if ( this.updatableTile(row, col, currentRow, currentCol) ) {
          indexesToUpdate.push( { row: currentRow, col: currentCol } );
        }
        currentCol += 1;
      }
      currentRow += 1;
    }
    return indexesToUpdate;
  }
  
  updateValues = ( row, col ) => {
    const currentBoard = this.state.board;
    const currentMineLocations = this.state.mineLocations;

    const indexesToUpdate = this.offset(row, col);
    indexesToUpdate.map(index => currentBoard[index.row][index.col].value += 1);
    currentBoard[row][col].mine = 1;
    currentMineLocations.push( { row: row, col: col } );
    
    this.setState( { board: currentBoard, mineLocations: currentMineLocations } );
    console.log("UPDATED!!!");
  }

  randomXY = () => {
    let mineIsUnique = false;
    let row = 0;
    let col = 0;
    while ( mineIsUnique === false ) {
      row = Math.round(Math.random()*(this.state.rows-1))
      col = Math.round(Math.random()*(this.state.columns-1))
      mineIsUnique = true;
      this.state.mineLocations.map( location => {
        if ( location.row === row && location.col === col ) {
          mineIsUnique = false;
        }
      })
    }
    return { row: row, col: col };
  }

  placeMines = ( numberOfMines ) => {
    console.log(`placing ${numberOfMines} mines`);
    let currentMine = 0;
    while ( currentMine < numberOfMines ) {
      const coords = this.randomXY();
      console.log(`The mine to place has coords: ${coords.row} and ${coords.col}`);
      this.updateValues(coords.row, coords.col);
      currentMine += 1;
    }
  }

  clickHandler = ( row, column ) => {
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
          onClick={this.placeMines.bind(this, 1)}>Mine it! </button>
      </div>
    );
  }
}

export default App;
