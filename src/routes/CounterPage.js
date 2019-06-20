import React from "react";
import {connect} from "dva";
import Counter from '../components/Counter'
class CounterPage extends React.Component {
  // 要传递给子组件的数据，这里定义了
  // 因为这个不是函数组件，所以这样定义的话，this.props里的数据不是最新的，所以不能只单单定义，
  // 还要在componentWillReceiveProps这个方法里重新赋予更新后的值，才能保证子组件每次都能获取最新的数据
  propsObj = {
    counter: this.props.counter
  }
  componentDidMount() {
    this.props.dispatch({
      type: 'counter/addList',
      payload: 'bbb'
    })
  }
  // 当props变化时，也就是counter这个State变化时，要从新给要传给子孩子的数据赋值，把最新的数据传下去
  componentWillReceiveProps (nextProps, b) {
    debugger
    this.propsObj = {
      counter: nextProps.counter,
      // 这里要重新赋值一次dispatch
      dispatch: nextProps.dispatch,
      add() {
        this.dispatch({
          type: 'counter/add',
          payload: {
            value: 5
          }
        })
      },
      desadd() {
        this.dispatch({
          type: 'counter/desadd',
          payload: {
            value: 3
          }
        })
      },
      addList() {
        this.dispatch({
          type: 'counter/addList',
          payload: 'bbb'
        })
      }
    }
  }


  render() {
    console.log('******'+ {...this.propsObj})
    debugger
    return (
      <div>
        <Counter {...this.propsObj}></Counter>
      </div>
    )
  }
}
export default connect(({counter}) => ({counter}))(CounterPage);
