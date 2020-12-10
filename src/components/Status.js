import React from 'react'
import styled from 'styled-components'

const Text = styled.b`
  margin: 0;
  font-weight; bold;
`;
const Player = styled.h4`
  margin: 0
`

const Status = ({currentPlayer}) => {
    return (
      <div>
      <Text>Current Player</Text>
      <Player>{currentPlayer}</Player>
      </div>
    );

  }

export default Status;