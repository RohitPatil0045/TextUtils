import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleOnClickUppercase = () => {
        let inputText = text.toUpperCase();
        setText(inputText);
        props.showAlert('Converted to UPPERCASE', 'success')
    };

    const handleOnClickLowercase = () => {
        let inputText = text.toLowerCase();
        setText(inputText);
        props.showAlert('Converted to lowercase', 'success')
    };
    
    const handleOnClickCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text copied', 'success')
    };

    const handleOnClickRemoveExtraSpaces = () => {
        let space = text.split(/[ ]+/);
        setText(space.join(' '));
        props.showAlert('Extra spaces has been removed', 'success')
    };

    const handleOnClickClear = () => {
        setText("");
        props.showAlert('Text has been', 'success')
    };

    return (
        <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>{props.heading} <b>&#11163;</b></h2> 

            <div className="mb-3 my-4">
                <textarea
                    className="form-control"
                    value={text}
                    placeholder="Enter Your text here"
                    onChange={handleOnChange}
                    id="exampleFormControlTextarea1"
                    rows="8"
                    cols="50"
                    autoFocus
                    style={{backgroundColor: props.mode === 'dark'?'#202124':'white', color: props.mode === 'dark'?'white':'black', caretColor: 'red' }}
                ></textarea>
            </div>
            <div className="col-auto" style={{cursor: 'pointer'}}>
                <button
                disabled={text.length===0}
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleOnClickUppercase}
                >
                    UPPERCASE
                </button>
                <button
                disabled={text.length===0}
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleOnClickLowercase}
                >
                    lowercase
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickCopy}>
                    Copy
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickRemoveExtraSpaces}>
                    Remove Extra Spaces
                </button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClickClear}>
                    Clear
                </button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>
                    {text.length===0?0:text.trim().split(' ').length} Words and {text.length} Characters
                </p>
                <p>{text.length===0?0:text.trim().split(' ').length * 0.008} mins required </p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </div>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string,
};

TextForm.defaultProps = {
    heading: "Enter your Text Below",
};
