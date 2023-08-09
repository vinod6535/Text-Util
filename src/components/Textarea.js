import React, { useState } from "react";

export default function Textarea(props) {

  const handelUpclicked = () => {
    // console.log("Uppercase button was clicked" + " " + text);
    let newtext = text.toUpperCase();
    settext(newtext);
    if (text.length>0){
      props.showAlert('Converted to Uppercase', 'success')
      
    }
    else{
      props.showAlert('Enter Someting in below cell', 'danger')
    }
    };
  const handelLoclicked = () => {
    // console.log("Uppercase button was clicked" + " " + text);
    let newtext = text.toLowerCase();
    settext(newtext);
    if (text.length>0){
      props.showAlert('Converted to Lowercase', 'success')
      
    }
    else{
      props.showAlert('Enter Someting in below cell', 'danger')
    }
  };

  const clear = () => {
    let newtext ="" ;
    settext(newtext);
    props.showAlert('Clear successfully', 'success')

  };
  const handelonchange = (event) => {
    console.log("Onchange");
    settext(event.target.value);
  };

  const [text, settext] = useState("");
  return (
    <>
    <div>
      <h1 style={{color:props.mode === 'light'? 'black':'white' }} className="my-4">{props.heading1}</h1>
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label" style={{color:props.mode === 'light'? 'black':'white' }} >
          {props.heading2}
        </label>
        <textarea
          className="form-control"
          id="Textarea1"
          value={text}
          onChange={handelonchange}
          rows="8"
        >
          {" "}
        </textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handelUpclicked}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-1" onClick={handelLoclicked}>
        Convert To Lowecase
      </button>
      <button className="btn btn-danger mx-1 my-1 " onClick={clear}>
       Clear
      </button>
      <h1 className="my-4" style={{color:props.mode === 'light'? 'black':'white' }} >Text summary</h1>
    <p style={{color:props.mode === 'light'? 'black':'white' }} >{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Chractor</p>
    </div>
    <p style={{color:props.mode === 'light'? 'black':'white' }} >{0.008*text.split("").length} Minutes to read</p>
    <h2 style={{color:props.mode === 'light'? 'black':'white' }} >Preview</h2>
    
   
        <p style={{color:props.mode === 'light'? 'black':'white' }}>
          {text.length>0?text:"Enter Something in above cell"}</p>
      

    </>
  );
}
