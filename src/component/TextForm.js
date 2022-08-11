import React , {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case","success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case","success");
  }

  const handleCopy =()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); 
    props.showAlert("Text Copied","success");
  }

  const handleExtraSpaces = ()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Space Removed","success");
  }

  const handleOnChange = (event)=> {
        setText(event.target.value);
  }

  const handleLoClear = () =>{
        setText("");
        props.showAlert("Text Box Cleared","success");
  }

  const[text , setText] = useState("Enter Text Here");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h2 mb-2>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'black'}} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
    </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert To Upper-Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To Lower-Case</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClear}>Clear Text Field </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text </button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary </h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p> {0.008  * text.split(" ").filter((element)=>{return element.length!==0}).length} Total Time for read </p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview "}</p>
    </div>

    </>
  )
}


