import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import { EditorFrame } from "./EditorStyle";


function CodeDisplay({code}) {
  const [html, setHtml] = useState(`${code}`);
  const [srcDoc, setSrcDoc] = useState("");


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
				${html}
				`);
    }, 400);

	return () => clearTimeout(timeout)
  }, [html]);

  return (
    <>
      <div>
        <EditorFrame
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          // frameBorder="0"
          width= "80vh"
          height= "80vw"
        />
      </div>
      <div>
        <Editor language="xml" value={html} onChange={setHtml} />
      </div>
    </>
  );
}

export default CodeDisplay;
