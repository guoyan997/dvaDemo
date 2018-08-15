/**
 * Created by GUOYAN on 2018-8-15.
 */
import React from 'react'
import {connect} from 'dva';
import Example from '../components/Example'

const ExamplePage = ({location, dispatch, example}) => {
  const {name, age, count} = example
  const propsObj = {
    name,
    age,
    count,
    add() {
      debugger
      dispatch({
        type: 'example/add',
        payload: {
          value: 5
        }
      })
    },
    desadd() {
      dispatch({
        type: 'example/desadd',
        payload: {
          value: 3
        }
      })
    }
  }
  return (
    <div>
      <Example {...propsObj}></Example>
    </div>
  )
}
export default connect(({example}) => ({example}))(ExamplePage);
