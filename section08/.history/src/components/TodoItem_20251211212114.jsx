import "./TodoItem.css";

const TodoItem = () => {
  return (
    <li className="TodoItem">
      <input type="checkbox" name="" id="" />
      React 공부하기
      <span className="content">2025.12.11</span>
      <button className="date">삭제</button>
    </li>
  );
};

export default TodoItem;
