import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, inputColor: ''}

  onChangeInput = event => {
    const valueLength = event.target.value.length
    this.setState({count: valueLength})

    if (valueLength !== 0) {
      this.setState({inputColor: 'white'})
    }
  }

  render() {
    const {count, inputColor} = this.state

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="input-container">
            <h1 className="heading white">Calculate the Letters you enter</h1>
            <label className="label white" htmlFor="inputText">
              Enter the phrase
            </label>
            <input
              placeholder="Enter the phrase"
              className={`input-text ${inputColor}`}
              id="inputText"
              type="text"
              onChange={this.onChangeInput}
            />
            <p className="count">No.of letters: {count}</p>
          </div>
          <img
            className="calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
