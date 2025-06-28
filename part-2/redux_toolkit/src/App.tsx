import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Navbar } from './pages/Navbar';
import { store } from './store';

function App() {
  return (
    <div className="App">

      <Provider store ={store} >
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
      </Provider>

    </div>
  );
}

export default App;
