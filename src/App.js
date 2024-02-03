import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import { useState } from "react";
// import Aboutus from "./Components/Aboutus";

function App() {
  // JSX


  //whether Dark is enabled or not 
  const[mode,setMode] = useState('dark'); 

  return (
    <>
      {/* {<Navbar/>} */}
      {/* {<Navbar title="TextUtils" aboutText="About us"/>} */}
      <Navbar title="TextUtils" aboutText="About us" mode={mode}/>
      
      <div className="container my-3">
      <TextForm heading="Enter the text to analysis below"/>
      {/* <Aboutus/> */}
      </div>

     
     
      <img src={logo} alt=""/>
    </>
  );
}

export default App;
