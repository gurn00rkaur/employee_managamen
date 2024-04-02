
import React,{Component} from 'react';
import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Dashboard from './Components/Ind';
// import Form from './Components/Form';


// function App() {
  class App extends Component{
    render()
    {  return (
        <div className="App">
          <Router>
            <Routes>
              <Route path='/' element={<Home/>}/>\
              <Route path='/project' element={<Dashboard />}/>
            </Routes>
          </Router>
          {/* <Form/> */}
        </div>
  );
    }
}

export default App;
