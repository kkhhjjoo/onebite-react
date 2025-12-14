import './TodoItem.css';

const TodoItem = ({ id, content }) => {
  return (
    <li className="TodoItem">
      <input type="checkbox" name="" id={id} />
      <span className="content">React 공부하기</span>
      <span className="date">2025.12.11</span>
      <button>삭제</button>
    </li>
  );
};

export default TodoItem;
