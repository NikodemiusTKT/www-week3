import React, {useEffect, useState} from 'react'
import M from 'materialize-css'

const Selector = (props) => {
  useEffect(() => {
    M.AutoInit();
  },[props.options])
    const {options,boardSize,onSelectChange} = props
    return (
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <select className="" value={boardSize} onChange={e => onSelectChange(e.target.value)}>
            {options.map((opt,index) => (
              <option value={opt} key={index}>
                {opt}
              </option>
            ))}
          </select>
          <label>Change field size</label>
        </div>
      </div>
    );
  }

export default React.memo(Selector);