import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleOnChange =(event) => {
     setText(event.target.value);
  }

  const [text, setText] = useState("Enter text here");

  //   setText("Enter new Text") ; //Correct way
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button
          className="btn btn-primary mx-1"
          onClick={handleUpClick} 
          id="UppercaseBtn"
        >
          Convert To Uppercase
        </button>

        <button
          className="btn btn-primary mx-1"
          onClick={handleLowClick} 
          id="LowercaseBtn"
        >
          Convert To Lowercase
        </button>
 

      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>{(text.split(" ").length)} words & {text.length} characters</p>
        <p> {0.008 * (text.split(" ").length)} Minutes to read</p>
        <h2> Preview</h2>
         <p> {text} </p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string };
