import './TodoItem.css';

const TodoItem = ({ ...todo }) => {
  return (
    <li className="TodoItem">
      <input type="checkbox" name={todo.content} id={id} />
      <span className="content">{content}</span>
      <span className="date">{createdAt}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
