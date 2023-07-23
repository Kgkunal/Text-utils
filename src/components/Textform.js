import React, { useState } from "react";

export default function Textform(props) {
    const handleUpClick=()=>{
        let upperText=text.toUpperCase();
        settext(upperText);
        props.showalert("Converted to Uppercase", "success");
    }

    const handleLoClick =()=>{
      let lowerText=text.toLowerCase();
      settext(lowerText);
      props.showalert("Converted to Lowercase", "success");
    }

    const handlebkClick = ()=>{
      settext(" ");
      props.showalert("Text is cleared", "danger");
    }

    //Function to copy text to clipboard
    const handlecpClick = ()=>{
      navigator.clipboard.writeText(`${text}`);
      props.showalert("Text copied to clipboard", "success");
    }

    const handleOnChange=(event)=>{
        settext(event.target.value);
    }

    const[text , settext]= useState("Enter Text Here");
  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}} >
    
      <h1>{props.heading}</h1> 
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "grey" : "white" , color: props.mode === "dark" ? "white" : "black"}} ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick} > Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-warning mx-1" onClick={handlecpClick}>Copy to Clipboard</button>
      <button className="btn btn-danger mx-1" onClick={handlebkClick}>Clear Text</button>
    </div>

    <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} Words , {text.length} Characters</p>
    <p> {0.008 * text.split(" ").length } Minutes to Read</p>
    <h3>Preview</h3>
    <p>{text}</p>


    </div>
    </>
  );
}
