import React, { useState } from "react";
import "./styles.css";

const EditableMarkdownInput = ({ onInputChange, defaultText }) => {
  const [markdownText, setMarkdownText] = useState(defaultText);

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setMarkdownText(newText);
    onInputChange(newText);
  };

  return (
    <textarea
      className="sidebyside"
      id="editor"
      value={markdownText}
      onChange={handleInputChange}
      placeholder="Digite seu texto em Markdown aqui..."
    />
  );
};

export default EditableMarkdownInput;
