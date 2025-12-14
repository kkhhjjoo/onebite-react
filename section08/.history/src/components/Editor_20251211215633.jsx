import "./Editor.css";
import { useState } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");

  const onChangeContent = () => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    onCreate();
  };

  return (
    <div className="Editor">
      <input type="text" placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
