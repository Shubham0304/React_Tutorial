import React from 'react';
import './App.css';
import { Person, Country } from './Person';

function App() {


  //Example of a function in React TS:

  // const getAge = (name:string): number => {
  //   return 99;

  // }
  return (
    <div className="App">

      <Person name={"Shubham"}
    email="shubhamjoshi0304@gmail.com"
    age={31} isMarried={false} friends={["jessica", "jake"]}
    country={Country.Brazil}/>

    </div>
  );
}

export default App;
