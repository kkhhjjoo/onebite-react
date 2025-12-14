import "./Editor.css";

const Editor = ({ onCreate }) => {
  return (
    <div className="Editor">
      <input type="text" placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
