import { cloneDeep } from 'lodash';
import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import './App.css';
import Board from './components/Board/Board';
import { make2DArray,mapGridIndexes,checkWin } from './utils';
import Button from './components/Button'
import Selector from './components/Selector'
import Status from './components/Status'
import Loadbar from './components/Loadbar'

const ROWS = 5;
const COLS = 5;
const MIN_TO_WIN = 5

const ROW_ARR = new Array(ROWS).fill(null)
const COL_ARR = new Array(COLS).fill(null)
const GRID = ROW_ARR.map(x => COL_ARR.slice())

const START_STATE = {
  currentPlayer: 'x',
  grid: make2DArray(5),
  gameOver: false,
  winLimit: 5,
  boardSize: 5,
  options: [3,4,5,6,7,8,9,10,12,13,14],
  timerValue: 0,
  timer: null
}
function whoIsNext(currentPlayer){
   return currentPlayer === 'x' ? 'o' : 'x';
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
    this.setState((prevState) => {
      clearInterval(prevState.timer);
      return {
        ...START_STATE,
        grid: newGrid,
        boardSize: value,
        winLimit: value,
      };
    });
  }
  // Function for changing player and updating progres bar value after 10 seconds
  progressionTimer = () => {
    if (this.state.timerValue == 100) {
      this.setState((prevState) => {
        return {
          currentPlayer: whoIsNext(prevState.currentPlayer),
          timerValue: 0,
          timer: clearInterval(prevState.timer),
        };
      });
    } else {
      this.setState((prevState) => {
        return { timerValue: prevState.timerValue + 10 };
      });
    }
  };
  initTurnChangeTimer = () => {
    clearInterval(this.state.timer);
    const startTimer = setInterval(this.progressionTimer, 1000);
    this.setState({ timerValue: 0, timer: startTimer });
  };
  handleClick = ({ rowIndex, colIndex }) => {
    const { currentPlayer, grid, gameOver, winLimit } = this.state;
    if (!gameOver && !grid[rowIndex][colIndex]) {
      const cloneGrid = cloneDeep(grid);
      cloneGrid[rowIndex][colIndex] = currentPlayer;
      const gridItems = mapGridIndexes({ grid: cloneGrid, value: currentPlayer });
      const hasWon = checkWin({ gridItems, winString: winLimit });
      this.initTurnChangeTimer();
      this.setState({
        currentPlayer: whoIsNext(this.state.currentPlayer),
        grid: cloneGrid,
        gameOver: hasWon,
      });
      if (hasWon) {
        alert(`Player ${currentPlayer === 'x' ? 1 : 2} won!`);
        this.setState({
          timerValue: 0,
          timer: clearInterval(this.state.timer),
        });
      }
    }
  };
  resetGame = () => {
    const { boardSize, winLimit } = this.state;
    var board = make2DArray(boardSize);
    this.setState({
      ...START_STATE,
      grid: board,
      winLimit,
      boardSize,
      timer: clearInterval(this.state.timer),
    });
  };

  render() {
    const { grid } = this.state;
    return (
      <div className="z-depth-3 game-container">
        <h3 style={{ marginTop: '0', marginBottom: '0' }}>Tic-Tac-Toe</h3>
      <Loadbar value={this.state.timerValue}></Loadbar>
      <Status currentPlayer={this.state.currentPlayer}></Status>
        <Board
          onClick={this.handleClick}
          rows={grid}
          timerValue={this.state.timerValue}
          currentPlayer={this.state.currentPlayer}
          boardSize={this.state.boardSize}
          onSelectChange={this.changeGridSize}
          options={this.state.options}
        />
      <Selector
        boardSize={this.state.boardSize}
        onSelectChange={this.changeGridSize}
        options={this.state.options}
      ></Selector>
        <Button onClick={this.resetGame}/>
      </div>
    );
  }
}
export default App;