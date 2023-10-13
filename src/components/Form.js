import React,{useState} from 'react'

export default function Form(props) {
    const [text,setText] = useState('');
    const [val,setVal] = useState('');

    const handleUpperCase=()=>{
        setText(val.toUpperCase());
    }

    const handleLowerCase=()=>{
        setText(val.toLowerCase());
    }

    const handleOnChange=(event)=>{
        setVal(event.target.value);
        
    }

    const handleCountWords=()=>{
        setText(val.length +" character(s) and "+ val.split(" ").length+ " word(s)");
    }
    const handleClear=()=>{
        setVal("");
        setText("");
        
    }
    return (
    <>

        <h1>{props.heading}</h1>
        <div className="mb-3">

        <textarea className="form-control" id="exampleFormControlTextarea1" value={val} rows="6" onChange={handleOnChange}>

        </textarea>

        <button className="btn btn-primary my-3 mx-3 " onClick={handleUpperCase}  >To Uppercase</button>
        <button className="btn btn-primary my-3 mx-3 " onClick={handleLowerCase}  >To Lowercase</button>
        <button className="btn btn-success my-3 mx-3 " onClick={handleCountWords} >Count Words</button>
        <button className="btn btn-danger my-3 mx-3 " onClick={handleClear}  >Clear</button>
        </div>

        <h1>Result</h1>
        <p>{text}</p>
       
    </>
   
)
}
