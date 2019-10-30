import React, {useState} from 'react';


const Loadbar = ({value}) => {
  return (
    <div>
    <h4>Turn change progress</h4>

    <div class="progress">
          <div class="determinate" style={{ width: value + '%' }}>{value/10}s</div>
    </div>
      </div>
  );
}

export default Loadbar;
