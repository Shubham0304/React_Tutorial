import './App.css';
import { useState } from 'react';



function App() {

    //StateHooks example1 : 
    // const [age, setAge] = useState(0)
    // const increaseAge = ()=> {
    //     setAge(age + 1)
    // };

     //StateHooks example2 : 
    // const [inputValue, setInputValue] = useState("");

    // const handleInputChange = (event) => {
    //     //console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }

    //StateHooks Example 3: 
    const [showText,setShowText] = useState(true);

    const handleButtonChange = (event) => {
        setShowText(!showText);
    }

    // example1 : 
    return (
    // <div className="App"> {age} 
    // <button onClick={increaseAge}>Increase Age</button>
    // </div>
        //StateHooks example2 : 

    // Example2: 
    // <div className='App'>
    //     <input type='text' onChange={handleInputChange}></input>
    //     {inputValue}
    // </div>

    // Example 3: 
        <div className='App'>
            <button onClick={handleButtonChange}> Show/Hide</button>
            {showText ? <h1>Hi My Name is Shubham</h1> : null}
        </div>

    );

}

export default App;
