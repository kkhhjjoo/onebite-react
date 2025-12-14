import './TodoItem.css';

const TodoItem = ({ isDone, content, id, date, onUpdate, onDelete }) => {
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

export default TodoItem;
