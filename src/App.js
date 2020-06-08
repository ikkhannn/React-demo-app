import React from 'react';
import Dinner from './dinner';
import './App.css';

 
function App() {
  const name="imran";
  return (
    <div className='App'>
    <h1>Hello from {name}</h1>
    <Dinner dishName1="Karahi" dishName2="Biryani"/>
    <Dinner dishName1="Qeema" dishName2="kheer"/>
    <Dinner dishName1="Chanay" dishName2="Rassmalai"/>
    </div>
  );
}

export default App;
