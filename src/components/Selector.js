import React, {Component,useEffect} from 'react'
import M from 'materialize-css'

class Selector extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    M.AutoInit();
  }
  handleChange(e) {
    this.props.onSelectChange(e.target.value);
  }

  render() {
    const {options,boardSize} = this.props
    return (
      <div className="row">
        <div className="input-field col s8 offset-s2">
          <select className="" value={boardSize} onChange={this.handleChange}>
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
}

export default Selector;