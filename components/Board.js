import React, { Component } from 'react';
import Row from './Row';
import Loadbar from './Loadbar'

import './Board.css'

const Board = ({
  rows,
  onClick,
  timerValue,
}) => (
  <div>
  <Loadbar value={timerValue}></Loadbar>
    <div id="board" class="container valign_wrapper">
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
