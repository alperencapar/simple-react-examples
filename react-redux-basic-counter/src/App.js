/* eslint-disable no-unused-vars */
import './App.css';

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions/counterAction'
import counterReducer from './reducers/counterReducer' 


function App() {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h3>Counter: {counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
