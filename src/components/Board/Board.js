import React from 'react';
import Row from './Row';

import './Board.css'

const Board = ({ rows, onClick}) => {
  return (
    <div>
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
