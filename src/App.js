import React, { useState } from "react";
import "./styles.css";
import Header from "./Header";
import EditableMarkdownInput from "./EditableMarkdownInput";
import RenderedMarkdownOutput from "./RenderedMarkdownOutput";

const defaultText =
  "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://github.com/viesant), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![Generic Image](https://via.placeholder.com/600x300)\n";

const App = () => {
  const [markdownText, setMarkdownText] = useState(defaultText);

  const handleInputChange = (newText) => {
    setMarkdownText(newText);
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <EditableMarkdownInput
          onInputChange={handleInputChange}
          defaultText={defaultText}
        />
        <RenderedMarkdownOutput markdownText={markdownText} />
      </main>
    </div>
  );
};

export default App;
