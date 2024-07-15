import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
export default function MarkdownEditor() {
  const [markdownInput, setMarkdownInput] = useState();
  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">MARKDOWN</div>
        <textarea
          autoFocus
          className="textarea"
          value={markdownInput}
          onChange={(e) => setMarkdownInput(e.target.value)}
        ></textarea>
      </div>
      <div className="wrapper">
        <div className="head">PREIVEW</div>
        <ReactMarkdown
          children={markdownInput}
          components={{
            code: MarkComponent,
          }}
        />
      </div>
    </div>
  );
}
const MarkComponent = ({ value }) => {
  return { value };
};
