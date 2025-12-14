import './List.css';
import TodoItem from './TodoItem';
import { useState } from 'react';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
      <ul className="todos_wrapper">
        {todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem {...todo} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default List;
