import React, { useState, useEffect, useLayoutEffect } from "react";
import { marked } from "marked";

export default function MarkdownEditor() {
  const [markdownInput, setMarkdownInput] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [showSplitView, setShowSplitView] = useState(false);

  useLayoutEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "s") {
        event.preventDefault();
        if (showPreview) {
          setShowPreview(false);
          setShowSplitView(true);
        } else if (showSplitView) {
          setShowSplitView(false);
        } else {
          setShowPreview(true);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showPreview, showSplitView]);

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
