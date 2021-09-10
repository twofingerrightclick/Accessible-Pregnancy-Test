import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment} from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
     <h2>Counter {counter}</h2>
     <button onClick={() => dispatch(increment())}>+</button>
     {isLogged ?<h3>secured info</h3> : ''}
    </div>
  );
}

export default App;
