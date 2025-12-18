import './Editor.css';
import { useState, useRef, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const Editor = () => {
  // const data = useContext(TodoContext);
  const { onCreate } = useContext(TodoDispatchContext);
  // console.log(data);

  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === '') {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent('');
  };

  return (
    <div className="Editor">
      <input ref={contentRef} value={content} onKeyDown={onKeydown} onChange={onChangeContent} type="text" placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
