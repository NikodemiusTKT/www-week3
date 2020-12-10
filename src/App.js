import { cloneDeep } from 'lodash';
import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import { make2DArray,mapGridIndexes,checkWin } from './utils';

const ROWS = 5;
const COLS = 5;
const MIN_TO_WIN = 5

const ROW_ARR = new Array(ROWS).fill(null)
const COL_ARR = new Array(COLS).fill(null)
const GRID = ROW_ARR.map(x => COL_ARR.slice())

const START_STATE = {
  currentPlayer: 'x',
  grid: cloneDeep(GRID),
  gameOver: false,
  winLimit: MIN_TO_WIN,
  boardSize: ROWS || COLS,
  options: [3,4,5,6,7,8,9,10,12,13,14],
  timerValue: 0,
  timer: null
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = cloneDeep(START_STATE);
    this.changeGridSize = this.changeGridSize.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.progressionTimer = this.progressionTimer.bind(this);
  }
  changeGridSize(newSize) {
    const value = parseInt(newSize);
    const newGrid = make2DArray(value);
    this.setState({
      grid: newGrid,
      boardSize: value,
      winLimit: value,
      gameOver: false,
      currentPlayer: 'x',
      timerValue: 0,
      timer: clearInterval(this.state.timer),
    });
  }
  // Function for changing player and updating progres bar value after 10 seconds
  progressionTimer = () => {
    if (this.state.timerValue == 100) {
      const nextPlayer = this.state.currentPlayer === 'x' ? 'o' : 'x';
      var newTimer = clearInterval(this.state.timer);
      this.setState({
        currentPlayer: nextPlayer,
        timerValue: 0,
        timer: newTimer,
      });
    } else {
      this.setState({
        timerValue: this.state.timerValue + 10,
      });
    }
  };
  turnChangeTimer = () => {
    clearInterval(this.state.timer);
    const startTimer = setInterval(this.progressionTimer, 1000);
    this.setState({ timerValue: 0, timer: startTimer });
  };
  handleClick = ({ rowIndex, colIndex }) => {
    const { currentPlayer, grid, gameOver, winLimit } = this.state;
    if (!gameOver && !grid[rowIndex][colIndex]) {
      const cloneGrid = cloneDeep(grid);
      const nextPlayer = currentPlayer === 'x' ? 'o' : 'x';
      cloneGrid[rowIndex][colIndex] = currentPlayer;
      const gridItems = mapGridIndexes({ grid: cloneGrid, value: currentPlayer });
      const hasWon = checkWin({ gridItems, winString: winLimit });
      this.turnChangeTimer();
      this.setState({
        currentPlayer: nextPlayer,
        grid: cloneGrid,
        gameOver: hasWon,
      });
      if (hasWon) alert(`Player ${currentPlayer === 'x' ? 1 : 2} won!`);
    }
  };
  resetGame = () => {
    const { boardSize, winLimit } = this.state;
    var board = make2DArray(boardSize);
    this.setState({
      grid: board,
      winLimit,
      boardSize,
      currentPlayer: 'x',
      gameOver: false,
      timerValue: 0,
      timer: clearInterval(this.state.timer),
    });
  };

  render() {
    const { grid } = this.state;
    return (
      <div className="z-depth-3 game-container">
        <h3 style={{ marginTop: '0', marginBottom: '0' }}>Tic-Tac-Toe</h3>
        <Board
          onClick={this.handleClick}
          rows={grid}
          timerValue={this.state.timerValue}
          currentPlayer={this.state.currentPlayer}
          boardSize={this.state.boardSize}
          onSelectChange={this.changeGridSize}
          options={this.state.options}
        />
        <div className="row">
          <button className="waves-effect waves-light btn-large" onClick={this.resetGame}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
export default App;