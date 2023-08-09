import { React, useState } from "react";
import {useParams} from 'react-router-dom';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import "codemirror/mode/xml/xml";
import { useMutation } from "@apollo/client";
import { UPDATE_WIREFRAME } from "../../utils/mutations";
import { CodeEditor, EditorContainer, EditorTitle } from "./EditorStyle";

export default function Editor({ language, value, onChange }) {
  const { wireframeId } = useParams();
  // console.log('initialValue:',value);
  console.log('wireframeId:',wireframeId);
  // const [apiResponseText, setApiResponseText] = useState(initialValue);
  const [updateWireframe, { loading, error }] = useMutation(UPDATE_WIREFRAME);


  function handleChange(editor, data, value) {
    onChange(value);
    // setApiResponseText(value);
  }

  const handleSave = async () => {
    try {
      await updateWireframe({
        variables: {
          wireframeId: wireframeId,
          apiResponseText: value,
        },
      });
      // Handle success or show a message
    } catch (error) {
      console.log('error:',wireframeId)
      console.log('error:',value)
      // Handle error
    }
  };
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
      <br />
      <button onClick = {handleSave}>Save Changes</button>
    </EditorContainer>
  );
}
// Editor.js
// import React, { useState } from "react";
// import "codemirror/lib/codemirror.css";
// import "codemirror/theme/nord.css";
// import "codemirror/mode/xml/xml";
// import { useMutation } from "@apollo/client";
// import { UPDATE_WIREFRAME } from "../../utils/mutations";
// import { CodeEditor, EditorContainer, EditorTitle } from "./EditorStyle";

// export default function Editor({ language, initialValue, wireframeId }) {
//   const [value, setValue] = useState(initialValue);
//   const [updateWireframe, { loading, error }] = useMutation(UPDATE_WIREFRAME);

//   function handleChange(editor, data, value) {
//     setValue(value);
//   }

//   const handleSave = async () => {
//     try {
//       await updateWireframe({
//         variables: {
//           _id: wireframeId,
//           apiResponseText: value,
//         },
//       });
//       // Handle success or show a message
//     } catch (error) {
//       // Handle error
//     }
//   };

//   return (
//     <EditorContainer>
//       <EditorTitle>Edit Code</EditorTitle>
//       <CodeEditor
//         onBeforeChange={handleChange}
//         value={value}
//         options={{
//           lineWrapping: true,
//           lint: true,
//           mode: language,
//           theme: "nord",
//           lineNumbers: true,
//         }}
//       />
//       <br />
//       <button onClick={handleSave}>Save Changes</button>
//     </EditorContainer>
//   );
// }
