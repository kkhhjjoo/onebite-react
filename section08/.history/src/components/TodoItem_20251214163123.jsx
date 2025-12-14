import './TodoItem.css';

const TodoItem = ({ ...todo, date }) => {
  return (
    <li className="TodoItem">
      <input checked={todo.isDone} type="checkbox" name={todo.content} id={todo.id} />
      <span className="content">{todo.content}</span>
      <span className="date">{new Date(date).toLocaleDateString()}</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
