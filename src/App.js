import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import { useState } from 'react';
import Alert from './component/Alert';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [mode , setMode] = useState('light');
const [alert , setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>
  setAlert(null),2000);
}

const toggleMode = ()=>{
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Daark Mode has been enabled","success");
    // document.title = "Text-Utils - Dark Mode";

    //If we want To highlight Title After Every Certain Time then we Used this Function.
    // setInterval(() => {
    //   document.title = "Text-Utils is Amazing Mode";
    // }, 2000);

    // setInterval(() => {
    //   document.title = "Install Text-Utils Now";
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    // document.title = "Text-Utils - Light Mode";
  }
}

  return (
    <>
    
    
     
    <Router>
    <Navbar title = "TextUtils" aboutText = " About-TextUtils" mode = {mode} toggleMode ={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'></div>
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Try TextUtils - Word Counter,Character counter,Remove Extra Spaces" mode = {mode} />}/>
          <Route exact path="/about" element={<About mode = {mode}/>}/>
          </Routes>
      
    </Router>
    

    </>
  );
}

export default App;
