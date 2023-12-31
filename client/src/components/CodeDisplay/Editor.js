import { React } from "react";
import {useParams} from 'react-router-dom';
import "codemirror/lib/codemirror.css";
import "codemirror/theme/nord.css";
import "codemirror/mode/xml/xml";
import { useMutation } from "@apollo/client";
import { UPDATE_WIREFRAME } from "../../utils/mutations";
import { CodeEditor, SaveChangesButton } from "./EditorStyle";

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
    <>
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
      <SaveChangesButton onClick = {handleSave}>Save Changes</SaveChangesButton>
   </>
  );
}
