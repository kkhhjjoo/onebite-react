import './TodoItem.css';

const TodoItem = ({ id, content, createdAt }) => {
  return (
    <li className="TodoItem">
      <input type="checkbox" name={content} id={id} />
      <span className="content">{content}</span>
      <span className="date">{createdAt}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
