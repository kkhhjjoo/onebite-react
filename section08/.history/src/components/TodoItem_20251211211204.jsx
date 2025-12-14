import "./TodoItem.css";

const TodoItem = () => {
  return (
    <li>
      React 공부하기
      <div>
        <span>2025.12.11</span>
        <button>삭제</button>
      </div>
    </li>
  );
};

export default TodoItem;
