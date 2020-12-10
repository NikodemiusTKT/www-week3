import React from 'react'
const Button = (({onClick}) => {
  return (
    <div className="row">
      <button
        className="waves-effect waves-light btn-large col s8 offset-s2"
        type="submit"
        onClick={onClick}
      >
        Reset
      </button>
    </div>
  );
})
export default Button;