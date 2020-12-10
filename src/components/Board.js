import React, { Component } from 'react';
import Row from './Row';
import Loadbar from './Loadbar'
import Status from './Status'
import Selector from './Selector'

import './Board.css'

const Board = ({ rows, onClick, timerValue, currentPlayer, boardSize,onSelectChange,options }) => {
  return (
    <div>
      <Status currentPlayer={currentPlayer}></Status>
      <Loadbar value={timerValue}></Loadbar>
      <Selector
        boardSize={boardSize}
        onSelectChange={onSelectChange}
        options={options}
      ></Selector>
      <div id="board" className="board-container">
        {rows.map((row, index) => (
          <Row key={index} rowIndex={index} squares={row} onClick={onClick} />
        ))}
      </div>
      <br />
    </div>
  );
};

export default Board;
