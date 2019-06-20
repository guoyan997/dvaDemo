import React from 'react';

const Example = (props) => {
  const {name, age, count,add, desadd} = props
  function addHandle() {
    add()
  }
  function desaddHandle() {
    desadd()
  }
  return (
      <div>
      <h1>名字是： {name}</h1>
      <h1>年龄是： {age}</h1>
      <h1>{count}</h1>
      <button onClick={addHandle}>add</button>
      <button onClick={desaddHandle}>desAdd</button>
    </div>
  );
};

Example.propTypes = {
};

export default Example;
