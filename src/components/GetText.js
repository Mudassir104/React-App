import React, { useState } from "react";

export default function GetText() {
  const [text, newText] = useState("Your text will be shown here.");
  function changetoupper() {
    newText(text.toUpperCase());
  }
  function changetolower() {
    newText(text.toLowerCase());
  }
  function handleOnChange(event) {
    //handleOnChange gives us an argument called event.
    newText(event.target.value);
  }
  function extractEmail() {
    let emails = document.getElementById("emails");
    let emailbox = document.getElementById("extractEmails");
    emails.classList.remove("d-none");
    emailbox.innerText = text.match(
      /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
    );
  }

  function textCopy() {
    let text = document.getElementById("textBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <h1>Enter Text Here: </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="textBox"
            rows="3"
          ></textarea>
          <button className="btn btn-primary my-2 mx-2" onClick={changetoupper}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={changetolower}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={extractEmail}>
            Extract Email
          </button>
          <button className="btn btn-primary my-2 mx-2" onClick={textCopy}>
            Copy text
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row px-3 d-none" id="emails">
          <h3>Extract Email</h3>
          <textarea
            className="form-control"
            id="extractEmails"
            onClick={extractEmail}
            rows="3"
          ></textarea>
        </div>
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} Words {text.length} Characters
        </p>
        <h3 className="my-3">Time to read this text at normal speed.</h3>
        <p>
          {text.split(" ").length / 2.5} seconds{" "}
          {text.split(" ").length / (2.5 * 60)} Minutes
        </p>
      </div>
    </div>
  );
}
