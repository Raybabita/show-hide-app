// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {
    showFirsName: false,
    showLastName: false,
  }

  onShowFirstName = () => {
    this.setState(preState => ({showFirsName: !preState.showFirsName}))
  }

  onShowLastName = () => {
    this.setState(preState => ({showLastName: !preState.showLastName}))
  }

  render() {
    const {showFirsName, showLastName} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="btn"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {showFirsName && <p className="show-hide-name">Joe</p>}
          </div>
          <div className="name-container">
            <button className="btn" type="button" onClick={this.onShowLastName}>
              Show/Hide Lastname
            </button>
            {showLastName && <p className="show-hide-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
