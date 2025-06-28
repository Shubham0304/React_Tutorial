import './App.css';
import { useState } from 'react';
import Axios from 'axios';


function App() {

    //const [excuseType, setExcuseType] = useState("");
    const [excuse, setExcuse] = useState("");


    const fetchExcuse = (excuseType) => {

        Axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuseType}`).then((res)=> {
            console.log(res.data);
            setExcuse(res.data[0].excuse);
        })


    };



    return (
        <div className='App'>
            <h1>Generate An Excuse</h1>
            <button onClick={()=>fetchExcuse("party")}>Party</button>
            <button onClick={()=>fetchExcuse("office")}>Official</button>
            <button onClick={()=>fetchExcuse("family")}>Family</button>

            <h2> {excuse}</h2>
        </div>
    )

}

export default App;

