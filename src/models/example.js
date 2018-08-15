
export default {

  namespace: 'example',

  state: {
    name: 'gy',
    age: 30,
    count: 0
  },

  // 这里是监听路由变化
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  // 这里是异步发送action,
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *add({ payload }, { call, put }) {  // eslint-disable-line
      debugger
      yield put({ type: 'addCount',payload:  payload});
    },
    *desadd({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'desaddCount',payload:  payload });
    },
  },
// 修改相应的state，从而实现界面变化
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    addCount(state, action) {
      const count = parseInt(state.count,10) + parseInt(action.payload.value,10)
      debugger
      return { ...state, ...{count} };
    },
    desaddCount(state, action) {
      const count = parseInt(state.count, 10) - parseInt(action.payload.value, 10)
      return { ...state,  ...{count} };
    }
  }
}
