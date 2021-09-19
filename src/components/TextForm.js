import React, {useState} from 'react'
// import PropTypes from "prop-types";


export const TextForm = (props) => {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    
    const handleInverseClick = (event) => {
        let newText = "";
        let i = 0;
        while (i < text.length)
        {
            let n = text.charAt(i);
            if (n === n.toUpperCase())
            {
                n = n.toLowerCase();
            }
            else
            {
                n = n.toUpperCase();
            }
            newText += n;
            i += 1;
        }
        setText(newText);
    }

    const handleClearClick = (event) => {
        let newText = "";
        read = 0;
        // word_count = 0;
        // char_count = 0;
        document.getElementById("read").innerHTML = read;
        document.getElementById("word_count").innerHTML = 0;
        document.getElementById("char_count").innerHTML = 0;
        setText(newText);
    }

    const handleCopy = () =>
    {
        console.log("I'm Copy.");
        let tempText = document.getElementById("myBox");
        tempText.select();
        navigator.clipboard.writeText(tempText.value);
    }

    const handleExtraSpaces = () =>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event, read, word_count, char_count) => {
        var tempText = event.target.value;
        var splitTemp = tempText.split(" ");
        setText(tempText);
        read = 0.008 * tempText.split(" ").length;
        char_count = tempText.length;
        word_count = tempText.split(" ").length;
        if (splitTemp.at(0) === "")
        {
            read = 0;
            word_count = 0;
            char_count = 0;
        }
        if (splitTemp.at(splitTemp.length-1) === "")
        {
            word_count = tempText.split(" ").length-1;
        }
        document.getElementById("read").innerHTML = read;
        document.getElementById("word_count").innerHTML = word_count;
        document.getElementById("char_count").innerHTML = char_count;
    }

    const [text, setText] = useState('');
    let read = 0;
    let word_count = 0;
    let char_count = 0;
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleInverseClick}>Convert to Inversecase</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                <p><span id = "word_count">{word_count}</span> words and <span id ="char_count">{char_count}</span> characters</p>
                <p><span id = "read">{read}</span> Minute read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
