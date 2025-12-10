import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);

  const onClickButton = (value) => {
    setNum(num + value);
  }
  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer num={num} />
      </section>
      <section>
        <Controller num={num} onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
