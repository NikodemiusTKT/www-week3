import React from 'react';
const Loadbar = ({ value }) => {
  return (
    <React.Fragment>
      <p>Turn is changing in {10 - value / 10} seconds</p>
      <div className="row">
        <div className="col s8 offset-s2 progress">
          <p>{value / 10}s</p>
          <div className="determinate" style={{ width: value + '%' }}></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Loadbar;
