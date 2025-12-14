import './TodoItem.css';

const TodoItem = ({ ...todo }) => {
  return (
    <li className="TodoItem">
      <input checked={todo.isDone} type="checkbox" name={todo.content} id={todo.id} />
      <span className="content">{todo.content}</span>
      <span className="date">{todo.date}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
