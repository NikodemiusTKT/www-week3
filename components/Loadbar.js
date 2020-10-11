import React from 'react';
const style = {
  marginBottom: '0'
}

const Loadbar = ({ value }) => {
  return (
    <div class="container">
      <p>Turn is changing in {10-value/10} seconds</p>
      <div class="row">
        <div class="col s12 progress" style={style}>
            <p>{value / 10}s</p>
          <div class="determinate" style={{ width: value + '%' }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadbar;
