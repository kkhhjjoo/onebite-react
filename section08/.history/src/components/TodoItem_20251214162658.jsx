import './TodoItem.css';

const TodoItem = ({ ...todo }) => {
  return (
    <li className="TodoItem">
      <input type="checkbox" name={todo.content} id={todo.id} />
      <span className="content">{todo.content}</span>
      <span className="date">{todo.createdAt}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
