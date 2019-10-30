import React, { Component } from 'react';
import {css } from 'emotion'
import Square from './Square';
import './Row.css'
const Row = ({ squares, rowIndex, onClick, currentPlayer }) => {
  const rowStyle = {
    margin: '0 auto',
    padding: '0 !important',
    width: '60%',
    height: '60%'
  }

  return (
    <div class="row" style={rowStyle}>
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