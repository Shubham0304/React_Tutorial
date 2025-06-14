import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';


function App() {

    const [catFact, setCatFact] = useState("");

    useEffect( ()=> {
        fetchCatFact();
    }, []);

    const fetchCatFact = ()=> {
        Axios.get("https://catfact.ninja/fact").then((res)=> {
            setCatFact(res.data.fact);
        });
    } 


    return (
        <div className='App'>
            <button onClick={fetchCatFact}>Generate A Cat Fact</button>
            <p>{catFact}</p>

        </div>
    )

}

export default App;

