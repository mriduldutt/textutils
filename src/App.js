import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Alert";
import About from "./Components/About";
import {
  BrowserRouter as Router,Route,Routes,Link
} from "react-router-dom";

function App() {
  // JSX


  //whether Dark is enabled or not 
  const[mode,setMode] = useState('light'); 
  
  
  //State of Alert
  const [alert,setAlert] = useState(null);
  
  const showAlert = (msg,type) =>{
           setAlert({
            msg : msg,
            type : type
           })

           setTimeout(()=>{
              setAlert(null);
           },1800)
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled", "success");
      document.title = 'Text Utils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'whitesmoke';
      showAlert("Light Mode has been enabled", "success");
      document.title = 'Text Utils - Light Mode';
    }
  }


  return (
    <>
      <Router>
      {/* {<Navbar/>} */}
      {/* {<Navbar title="TextUtils" aboutText="About us"/>} */}
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" 
          element={<TextForm  showAlert ={showAlert} heading="Enter the text to analysis below" mode={mode}/>}/>
        </Routes>

      {/* <Aboutus/> */}
      </div>

      <img src={logo} alt=""/>
      </Router>
    </>
  );
}

export default App;
