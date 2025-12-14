import './App.css';
import { useState, useRef, useReducer, useCallback } from 'react';
import Editor from './components/Editor';
import Header from './components/Header';
import List from './components/List';

const mockData = [
  {
    id: 0,
    isDone: false,
    content: 'React 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true,
    content: '자바스크립트 공부하기',
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: 'Next.js 공부하기',
    date: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'UPDATE':
      return state.map((item) => (item.id === action.targetId ? { ...item, isDone: !item.isDone } : item));
    // setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
    case 'DELETE':
      return state.filter((item) => item.id !== action.targetId);
    // setTodos(todos.filter((todo) => todo.id !== targetId));
    default:
      return state;
  }
}

function App() {
  // const [todos, setTodos] = useState(mockData);
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // const onCreate = (content) => {
  // const newTodo = {
  //   id: idRef.current++,
  //   isDone: false,
  //   content: content,
  //   date: new Date().getTime(),
  // };
  // setTodos([newTodo, ...todos]);
  //   dispatch({
  //     type: 'CREATE',
  //     data: {
  //       id: idRef.current++,
  //       isDone: false,
  //       content: content,
  //       date: new Date().getTime(),
  //     },
  //   });
  // };

  const onCreate = useCallback((content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  // const onUpdate = (targetId) => {
  //todos State의 값들 중에
  //targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경
  //인수: todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
  // setTodos(todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo)));
  // dispatch({
  //   type: 'UPDATE',
  //   targetId: targetId,
  // });
  // };

  const onUpdate = useCallback((targetId) => {
    dispatch({
      type: 'UPDATE',
      targetId: targetId,
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: 'DELETE',
      targetId: targetId,
    });
  }, []);

  return (
    <div className="App">
      {/* <Exam /> */}
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
