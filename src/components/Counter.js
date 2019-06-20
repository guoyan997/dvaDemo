import React, {Component} from 'react';
class Counter extends Component {
  constructor(props) {
    super(props)
  }
  componentWillReceiveProps (a, b) {
    debugger
  }
  onIncreaseClick () {
    this.props.add()
  }
  onDescreaseClick () {
    this.props.desadd()
  }
  onAddList () {
    this.props.addList()
  }
  render() {
    debugger
    const { counter } = this.props
    return (
      <div>
        <span>{counter.value}</span>
        <button onClick={this.onIncreaseClick.bind(this, 1)}>Increase</button>
        <button onClick={this.onDescreaseClick.bind(this, 2)}>Descrease</button>
        <br/>
        <button onClick={this.onAddList.bind(this)}>addList</button>
        <ul>
          {
            counter.strList.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default Counter;
