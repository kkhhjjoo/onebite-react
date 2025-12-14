import './TodoItem.css';

const TodoItem = ({ isDone, content, id, date }) => {
  return (
    <li className="TodoItem">
      <input checked={isDone} readOnly type="checkbox" name={content} id={id} />
      <span className="content">{content}</span>
      <span className="date">{new Date(date).toLocaleDateString()}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
