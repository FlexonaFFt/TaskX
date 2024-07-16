import React, { useState, useLayoutEffect } from "react";
import { marked } from "marked";

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

  const renderedMarkdown = marked(markdownInput, {
    breaks: true,
    gfm: true,
  });

  return (
    <div className="App">
      <div className="wrapper">
        <div className="head">{showPreview ? "PREVIEW" : "MARKDOWN"}</div>
        {showPreview ? (
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: renderedMarkdown }}
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
