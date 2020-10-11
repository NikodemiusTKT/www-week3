import React, { Component } from 'react';
import {css } from 'emotion'
import Square from './Square';
import './Row.css'
const Row = ({ squares, rowIndex, onClick, currentPlayer }) => {
  const rowStyle = {
  }

  return (
    <div class='row valign-wrapper' style={rowStyle}>
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