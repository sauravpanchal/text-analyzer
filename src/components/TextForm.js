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
        word_count = 0;
        char_count = 0;
        document.getElementById("read").innerHTML = read;
        document.getElementById("word_count").innerHTML = word_count;
        document.getElementById("char_count").innerHTML = char_count;
        setText(newText);
    }
    const handleOnChange = (event, read) => {
        // console.log("OnChange was click");
        setText(event.target.value);
        read = 0.008 * text.split(" ").length;
        word_count = text.split(" ").length;
        char_count = text.length+1;
        // console.log(read);
        document.getElementById("read").innerHTML = read;
        document.getElementById("word_count").innerHTML = word_count;
        document.getElementById("char_count").innerHTML = char_count;
        // return read;
        // console.log(text);
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
                <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                {
                    // text[text.length] === " "
                    text.at(-1) !== " " || text.at(0) === " "
                    ? <p><span id = "word_count">{word_count}</span> words and <span id ="char_count">{char_count}</span> characters</p>
                    //   console.log("if")
                    : <p><span id = "word_count">{word_count}</span> words and <span id ="char_count">{char_count}</span> characters</p>
                    //   console.log("else")
                    //  console.log("if")
                    // : console.log("else")
                }
                <p><span id = "read">{read}</span> Minute read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
