import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  //1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  //2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });
  //3. 언마운트 : 죽음
  useEffect(() => {
    console.log(`count: ${num} / input: ${input}`);
  }, [num, input]);
  //의존성 배열
  //dependency array
  //deps

  const onClickButton = (value) => {
    setNum(num + value);
  }
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => {
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer num={num} />
        { num % 2 === 0? <Even /> : null}
      </section>
      <section>
        <Controller num={num} onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
