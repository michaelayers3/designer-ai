import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { EditorContainer, EditorFrame, EditorTitle } from "./EditorStyle";

function CodeDisplay({ code }) {
  const [html, setHtml] = useState(`${code}`);
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
				${html}
				`);
    }, 400);

    return () => clearTimeout(timeout);
  }, [html]);

  return (
    <>
      <EditorContainer>
        <EditorFrame srcDoc={srcDoc} title="output" sandbox="allow-scripts" />
        <EditorTitle>Edit Your Code Below</EditorTitle>
        <Editor language="xml" value={html} onChange={setHtml} />
      </EditorContainer>
    </>
  );
}

export default CodeDisplay;
