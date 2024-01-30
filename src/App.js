import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  // JSX
  return (
    <>
      {/* {<Navbar/>} */}
      {/* {<Navbar title="TextUtils" aboutText="About us"/>} */}
      <Navbar title="TextUtils"/>
      <img src={logo} alt=""/>
    </>
  );
}

export default App;
