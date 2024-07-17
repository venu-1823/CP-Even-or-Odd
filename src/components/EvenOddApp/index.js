// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, parity: 'Even'}
    onIncrement=()=>{
        const  randomNumber= Math.floor(Math.random() * 101);
         const parityCheck = randomNumber % 2 === 0 ? 'Even' : 'Odd'
        this.setState({count:randomNumber,parity:parityCheck})
    }
  render() {
    const {count, parity} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">Count {count}</h1>
        <p>Count is {parity}</p>
        <button onClick={this.onIncrement}>Increment</button>
        <p>*Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
