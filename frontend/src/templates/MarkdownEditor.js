import React, { useState, useEffect, useLayoutEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownEditor() {
  const [markdownInput, setMarkdownInput] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  useLayoutEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault(); // Предотвращаем стандартное поведение Ctrl+S
        setShowPreview((prevState) => !prevState);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">{showPreview ? "PREVIEW" : "MARKDOWN"}</div>
        {showPreview ? (
          <ReactMarkdown
            className="markdown"
            children={markdownInput}
            components={{
              code: MarkComponent,
            }}
          />
        ) : (
          <textarea
            autoFocus
            className="textarea"
            value={markdownInput}
            onChange={(e) => setMarkdownInput(e.target.value)}
          ></textarea>
        )}
      </div>
    </div>
  );
}

const MarkComponent = ({ value }) => {
  return <code>{value}</code>;
};
