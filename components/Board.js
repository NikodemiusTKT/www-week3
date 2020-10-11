import React, { Component } from 'react';
import Row from './Row';
import Loadbar from './Loadbar'
import Status from './Status'

import './Board.css'

const Board = ({
  rows,
  onClick,
  timerValue,
  currentPlayer,
}) => (
  <div>
    <Status currentPlayer={currentPlayer}></Status>
  <Loadbar value={timerValue}></Loadbar>
    <div id="board" class="board-container">
      {rows.map((row, index) => (
        <Row
        key={index}
        rowIndex={index}
        squares={row}
        onClick={onClick}
      />
      ))}
      </div>
      </div>
  );

export default Board;
