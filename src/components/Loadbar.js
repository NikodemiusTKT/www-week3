import React from 'react';
const style = {
  marginBottom: '0'
}

const Loadbar = ({ value }) => {
  return (
    <div className="container">
      <p>Turn is changing in {10-value/10} seconds</p>
      <div className="row">
        <div className="col s12 progress" style={style}>
            <p>{value / 10}s</p>
          <div className="determinate" style={{ width: value + '%' }}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loadbar;
