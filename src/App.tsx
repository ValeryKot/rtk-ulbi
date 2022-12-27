import React from 'react';
import './App.css';
import { UserSlice } from './store/reducers/UserSlice';
import { useAppDispatch } from './store/hooks/redux';
import { useAppSelector } from './store/hooks/redux';

function App() {
  const {count} = useAppSelector(state => state.userReducer);
  const {increment} = UserSlice.actions;
  const dispatch = useAppDispatch();

  // console.log(increment(5));

  return (
    <div className="App">
     <h1>{count}</h1>
     <button onClick={() => dispatch(increment(10))}>Increment</button>
    </div>
  );
}

export default App;
