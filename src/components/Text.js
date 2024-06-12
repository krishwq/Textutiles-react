import React, { useState } from "react";

export default function Text(props) {
  const toupper = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    console.log(props.btn);
    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Converted to Uppercase", "success");
    }
  };
  const tolower = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Converted to Lowercase", "success");
    }
  };
  const clear = () => {
    let newtext = "";
    setText(newtext);
    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Text cleared successfully", "success");
    }
  };
  const copy = () => {
    let txt = document.getElementById("mybox");
    navigator.clipboard.writeText(txt.value);
    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Copied to clipboard", "success");
    }
  };
  const capitalized = () => {
    var newtext = text.toLowerCase().split(" ");

    for (var i = 0; i < newtext.length; i++) {
      newtext[i] = newtext[i].charAt(0).toUpperCase() + newtext[i].substring(1);
    }
    setText(newtext.join(" "));
    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Changed to capitalized form", "success");
    }
  };
  const extraspaces = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));

    if (text === "") {
      props.showalart("Please enter some text first !", "warning");
    } else {
      props.showalart("Extraspaces removed successfully", "success");
    }
  };
  const change = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="my-3"
        style={{ color: props.mode === "dark" ? "white" : "rgb(1 3 55)" }}
      >
        <h1 className="mb-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={text}
            onChange={change}
            placeholder="Enter Text Here"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#676666",
              color: props.mode === "light" ? "rgb(1 3 55)" : "white",
            }}
          ></textarea>
        </div>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={toupper}
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={tolower}
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={capitalized}
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
          >
            Capitalized Case
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1 "
            onClick={copy}
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
          >
            Copy Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            onClick={clear}
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
          >
            Clear Text
          </button>
          <button
            type="button"
            className="btn btn-primary mx-1"
            style={{
              backgroundColor:
                props.btn === "primary"
                  ? "#06066e"
                  : props.btn === "success"
                  ? "#074f07"
                  : props.btn === "warning"
                  ? "#939334"
                  : props.btn === "danger"
                  ? "#7f0c0c"
                  : props.btn === "info"
                  ? "#4d4dd3"
                  : "",
            }}
            onClick={extraspaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "rgb(1 3 55)" : "white" }}
      >
        <h2>Your Text Summery</h2>
        <h6>
          Your text contains {text.split(" ").length} Words and {text.length}{" "}
          charecters.
        </h6>
        <h6>
          {Math.round(0.008 * text.split(" ").length * 1000) / 1000} Minutes
          read
        </h6>
        <h3>Preview:</h3>
        <h6>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here."}
        </h6>
      </div>
    </>
  );
}
