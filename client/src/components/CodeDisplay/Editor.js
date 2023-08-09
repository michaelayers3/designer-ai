import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import "codemirror/mode/xml/xml";
import { CodeEditor, EditorContainer, EditorTitle } from "./EditorStyle";

export default function Editor({ language, value, onChange }) {
  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <EditorContainer>
      <EditorTitle>Edit Code</EditorTitle>
        <CodeEditor
          onBeforeChange={handleChange}
          value={value}
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: "nord",
            lineNumbers: true,
          }}
        />
    </EditorContainer>
  );
}
