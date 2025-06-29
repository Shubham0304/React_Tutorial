import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link  } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { store } from './store';


function App() {
  return (
    <div className="App">

      <Provider store ={store} >
                  <Router>
                    <Link to="/"> Home</Link>
                    <Link to="/login"> Login</Link>
                    <Link to="/logput"> Logout</Link>
                      <Routes>
                          <Route path="/" element= {<Home/>}/>
                          <Route path="/login" element= {<Login/>}/>
                          <Route path="/contact" element= {<Contact/>}/>
                          <Route path="*" element= {<h1>Page Not Found</h1>}/>
      
                      </Routes>
      
                  </Router>
      </Provider>

    </div>
  );
}

export default App;
