import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handelLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handelClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = '';
    setText(newText);
  }
  const handelOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  }

  const handelCopy = () => {
var text= document.getElementById("myBox")
text.select();
navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = ()=> {
let newText = text.split(/[ ]+/)
setText(newText.join(" "))
  }

  const [text, setText] = useState("Enter text here2");
  // setText("new text");
  return (
    <>
    <div className="conatiner">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handelOnChange}
          id="myBox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick}>
        Convert to UpperCase
      </button>

      <button className="btn btn-primary mx-3" onClick={handelLoClick}>
        Convert to LowerCase
      </button>
      <button className="btn btn-primary mx-3" onClick={handelClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handelCopy}>
      Copy Text
      </button>
      <button className="btn btn-primary mx-3" onClick={handelCopy}>
      Extra Spacing
      </button>
      
    </div>
    <div className="container my-2">
<h1>
    Your text summary
</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} Minutes read</p>
<h2>Preview</h2>
<p>  {text}  </p>
    </div>
    </>
  )
}
