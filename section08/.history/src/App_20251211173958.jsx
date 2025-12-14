import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'

function App() {

  return (
    <div class="App">
      Todo List
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
