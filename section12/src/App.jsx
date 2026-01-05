import './App.css';
import { useReducer, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Diary from './pages/Diary';
import New from './pages/New';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import { DiaryDispatchContext, DiaryStateContext } from './contexts/DiaryContext';


//1. '/' : 모든 일기를 조회하는 Home 페이지
//2. '/new' : 새로운 일기를 작성하는 New 페이지
//3. '/diary' : 일기를 상세히 조회하는 Diary 페이지

// const mockData = [
//   {
//     id: 1,
//     createdDate: new Date("2025-12-25").getTime(),
//     emotionId: 1,
//     content: "1번 일기 내용"
//   },
//   {
//     id: 2,
//     createdDate: new Date("2025-12-24").getTime(),
//     emotionId: 2,
//     content: "2번 일기 내용"
//   },
//   {
//     id: 3,
//     createdDate: new Date("2025-11-11").getTime(),
//     emotionId: 3,
//     content: "3번 일기 내용"
//   }
// ]

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'CREATE': {
        nextState = [action.data, ...state];
        break;
       }
    case 'UPDATE': {
        nextState =  state.map((item) => String(item.id) === String(action.data.id) ? action.data : item); 
      break;
      }
    case 'DELETE':{
        nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
      }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(nextState));
  return nextState;
}



function App() {

  const [data, dispatch] = useReducer(reducer, mockData); //여러가지 일기 데이터를 가져야해서 []와 같이 빈 배열

  const idRef = useRef(3);

  // localStorage.setItem('test', 'hello');
  // localStorage.setItem("person", JSON.stringify({ name: '이정환' }));

  console.log(localStorage.getItem('test'));
  console.log(JSON.parse(localStorage.getItem('person')));
  // JSON.parse(undefined); //오류뜨니까 사용말것!

  localStorage.removeItem("test");

  //새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }
  //기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch(
      {
        type: 'UPDATE',
        data: {
          id,
          createdDate,
          emotionId,
          content
        }
      }
    )
  }
  //기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      id,
    })
  }

  return (

    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/new" element={ <New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit /> } />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
