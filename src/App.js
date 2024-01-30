import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  // JSX
  return (
    <>
      {/* {<Navbar/>} */}
      {/* {<Navbar title="TextUtils" aboutText="About us"/>} */}
      <Navbar title="TextUtils" aboutText="About us"/>
      
      <div className="container my-3">
      <TextForm heading="Enter the text to analysis below"/>
      
      </div>

     
     
      <img src={logo} alt=""/>
    </>
  );
}

export default App;
