import React from 'react'

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
    border: '1px solid black',
    height: '60px',
    width: '60px',
    fontSize: '30px',
    fontFamily: 'Helvetica',
    margin: '0 auto',
    alignItems: 'center'
  }
  if (value === 'x')
    style.backgroundColor = 'rgb(124,252,0)'
  else if (value === 'o')
    style.backgroundColor = 'rgb(250,128,114)'
  return (
    <div class="col s1 center-align" style={style} onClick={() => onClick(indexes)} >
    {value}
    </div>
  );
}

export default Square;