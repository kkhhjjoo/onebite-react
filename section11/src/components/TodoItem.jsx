import './TodoItem.css';
import { memo, useContext } from 'react';
import { TodoDispatchContext } from '../App';

const TodoItem = ({ isDone, content, id, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };
  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <li className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} readOnly type="checkbox" name={content} id={id} />
      <span className="content">{isDone ? <s>{content}</s> : content}</span>
      <span className="date">{new Date(date).toLocaleDateString()}</span>
      <button onClick={onClickDeleteButton}>삭제</button>
    </li>
  );
};

//고차 컴포넌트(HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//반환값에 따라, Props가 바뀌었는지 안바뀌었는지 판단
//True -> Props 바뀌지 않음 -> 리렌더링 X
//False -> Props 바뀜 -> 리렌더링 O
// if (prevProps.id !== nextProps.id) return false;
// if (prevProps.isDone !== nextProps.isDone) return false;
// if (prevProps.content !== nextProps.content) return false;
// if (prevProps.date !== nextProps.date) return false;
// return true;
// });
export default memo(TodoItem);
