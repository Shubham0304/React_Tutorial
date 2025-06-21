import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { useState, createContext } from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';



export const AppContext = createContext();

function App() {
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
    const client = new QueryClient({
    defaultOptions: {
        queries: {
        refetchOnWindowFocus: false,
        },
    },
    });

    return (
        <div className='App'>
        <QueryClientProvider client={client}>
        <AppContext.Provider value = {{userName, setUserName}}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element= {<Home/>}/>
                    <Route path="/profile" element= {<Profile/>}/>
                    <Route path="/contact" element= {<Contact/>}/>
                    <Route path="/menu" element= {<Menu/>}/>

                    <Route path="*" element= {<h1>Page Not Found</h1>}/>

                </Routes>

            </Router>
            </AppContext.Provider>
            </QueryClientProvider>

        </div>
    )
    

}

export default App;

