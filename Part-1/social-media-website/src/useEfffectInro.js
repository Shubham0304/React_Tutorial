import './App.css';
import { useState } from 'react';

function App() {

    const [showText, setShowText] = useState(false);


    return (
        <div>
            <button onClick={()=> { setShowText(!showText)
        }}>Show Text</button>
        {showText? <Text/>: ""}
        
        </div>
    )

}

export default App;