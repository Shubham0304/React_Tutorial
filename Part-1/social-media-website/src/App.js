import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';
import { useState } from 'react';



function App() {

// Example of Props drilling
    // const TopComponent = ()=> {
    //     const [state, setState] = useState();
    //     return (
    //         <div >
    //             <MiddleComponent state={state} />
    //         </div>
    //     )
    // }
    //     const MiddleComponent = ()=> {
    //     // const [state, setState] = useState();
    //     return (
    //         <div >
    //             <BottomComponent state={state} />
    //         </div>
    //     )
    // }
    //     const BottomComponentComponent = (state)=> {
    //     // const [state, setState] = useState();
    //     return (
    //         <div >
    //             {state}
    //         </div>
    //     )
    // }
    const [userName, setUserName] = useState("Shubham");

    return (
        <div className='App'>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element= {<Home username={userName}/>}/>
                    <Route path="/profile" element= {<Profile username={userName}/>}/>
                    <Route path="/contact" element= {<Contact/>}/>
                    <Route path="*" element= {<h1>Page Not Found</h1>}/>

                </Routes>

            </Router>

        </div>
    )
    

}

export default App;

