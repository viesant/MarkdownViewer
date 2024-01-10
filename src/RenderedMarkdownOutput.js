import React from "react";
import marked from "marked";
import "./styles.css";

const RenderedMarkdownOutput = ({ markdownText }) => {
  const htmlText = marked.parse(markdownText);
  marked.setOptions({
    breaks: true
  });

  return (
    <div
      className="sidebyside"
      id="preview"
      dangerouslySetInnerHTML={{ __html: htmlText }}
    />
  );
};

export default RenderedMarkdownOutput;
