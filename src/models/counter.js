
export default {

  namespace: 'counter',

  state: {
   value: 0,
   strList: ['aaa']
  },

  // 这里是监听路由变化
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 这里是异步发送action,
  effects: {
    *add({ payload }, { call, put }) {  // eslint-disable-line
      debugger
      yield put({ type: 'addCount',payload:  payload});
    },
    *desadd({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'desCount',payload:  payload });
    },
    *addList ({ payload }, { call, put }) {
      yield put({ type: 'addListItem',payload:  payload });
    }
  },
// 修改相应的state，从而实现界面变化
  reducers: {
    addCount(state, action) {
      debugger
      const value = parseInt(state.value,10) + parseInt(action.payload.value,10)
      return { ...state,  ...{value} };
    },
    desCount(state, action) {
      const value = parseInt(state.value, 10) - parseInt(action.payload.value, 10)
      return { ...state,  ...{value} };
    },
    addListItem (state, action) {
      const strList = state.strList
      strList.push(action.payload)
      return { ...state,  ...{strList} };
    }
  }
}
