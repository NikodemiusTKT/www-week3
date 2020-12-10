import React from 'react'
import './Square.css'

const Square = ({
  value,
  colIndex,
  rowIndex,
  size,
  onClick,
}) => {
  const player1Style = {
    backgroundColor: 'rgb(124,252,0)'
  }
  const player2Style = {
    backgroundColor: 'rgb(250,128,114)'
  }
  const indexes = { rowIndex, colIndex };
  const style = {
  }
  if (value === 'x')
    style.backgroundColor = 'rgb(124,252,0)'
  else if (value === 'o')
    style.backgroundColor = 'rgb(250,128,114)'
  return (
    <div className="col align-center square" style={style} onClick={() => onClick(indexes)} >
    {value}
    </div>
  );
}

export default Square;