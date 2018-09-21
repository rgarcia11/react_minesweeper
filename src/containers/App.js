import React, { Component } from 'react';
import './App.css';
import Board from '../Board/Board';

class App extends Component {
  
  state = {
    board: [],
    numberOfMines: 10,
    rows: 8,
    columns: 12
  };
  
  tileInBoard = ( currentRow, currentCol ) => {
    return currentRow < this.state.rows && currentRow >= 0 && currentCol < this.state.columns && currentCol >= 0;
  }

  updatableTile = ( row, col, currentRow, currentCol ) => {
    return (!(currentRow === row && currentCol === col)) && this.tileInBoard(currentRow, currentCol);
  }

  virginMine = ( row, col ) => {
    const tile = this.state.board[row][col];
    return ((tile.value === 0) && (tile.mine === 0));
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
    const currentBoard = [...this.state.board];

    const indexesToUpdate = this.offset(row, col);
    indexesToUpdate.map(index => currentBoard[index.row][index.col].value += 1);
    currentBoard[row][col].mine = 1;
    
    this.setState( { board: currentBoard } );
  }

  randomXY = (numberOfMines) => {
    let currentMine = 0;
    const newMineLocations = [];
    const currentBoard = [...this.state.board];
    while ( currentMine < numberOfMines ) {
      let mineIsUnique = false;
      let row = 0;
      let col = 0;
      while ( mineIsUnique === false ) {
        row = Math.round(Math.random()*(this.state.rows-1))
        col = Math.round(Math.random()*(this.state.columns-1))
        mineIsUnique = true;
        if ( currentBoard[row][col].mine !== 0 ) {
          mineIsUnique = false;
        }
      }
      newMineLocations.push( { row: row, col: col } );
      currentBoard[row][col].mine = 1;
      currentMine += 1;
    }
    this.setState( { board: currentBoard } );
    return newMineLocations;
  }

  placeMines = ( numberOfMines ) => {
    let currentMine = 0;
    const mineLocations = this.randomXY(numberOfMines);
    mineLocations.map( ( coords ) => {
      this.updateValues(coords.row, coords.col);
    });
    
  }

  createBoard = () => {
    const newBoard = [];
    let currentRow = 0;
    while ( currentRow < this.state.rows ) {
      let currentColumn = 0;
      const newRow = [];
      while ( currentColumn < this.state.columns ) {
        const newTile = { value: 0, show: 0, mine: 0 };
        newRow.push( newTile );
        currentColumn += 1;
      }
      newBoard.push( newRow );
      currentRow += 1;
    }
    this.setState( {board: newBoard } )
  }

  discover = ( row, col, board ) => {
    const indexesToUpdate = this.offset(row, col);
    const coordsToClick = [];
    indexesToUpdate.map( (index) => {
      if ( this.virginMine(index.row, index.col) && board[index.row][index.col].show === 0 ) {
        coordsToClick.push(index);
      }
      board[index.row][index.col].show = 1;
    });
    coordsToClick.map( (index) => {
      board = this.discover(index.row, index.col, board);
    });

    return board;
  }

  showAllTiles = () => {
    const currentBoard = [...this.state.board];
    currentBoard.map( (currentRow) => {
      currentRow.map( (currentTile) => {
        currentTile.show = 1;
      })
    });
    return currentBoard;
  }

  clickHandler = ( row, col ) => {
    let currentBoard = [...this.state.board];
    currentBoard[row][col].show = 1;
    if ( this.virginMine(row, col) ) {
      currentBoard = this.discover( row, col, currentBoard );
    }
    if ( currentBoard[row][col].mine !== 0 ) {
      currentBoard = this.showAllTiles();
    }
    this.setState( { board: currentBoard } );
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
          onClick={this.createBoard.bind(this)}>Erase!</button>
        <button
          onClick={this.placeMines.bind(this, 10)}>Mine it!</button>
      </div>
    );
  }
}

export default App;
