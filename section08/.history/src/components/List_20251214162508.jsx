import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos }) => {
  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
      <ul className="todos_wrapper">
        {todos.map((todo) => (
          <div>
            <TodoItem key={todo.id} id={todo.id} name={todo.content} createdAt={todo.createdAt} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
