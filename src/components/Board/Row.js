import React from 'react';
import Square from './Square';
import './Row.css'
const Row = ({ squares, rowIndex, onClick, currentPlayer }) => {
  return (
    <div className='row valign-wrapper' >
        {squares.map((square, index) => {
          return <Square
            value={square}
            colIndex={index}
            rowIndex={rowIndex}
            key={index}
            size={60}
            onClick={onClick}
          />
        })}
        </div>
  )
}

export default Row;