import { useState } from 'react'
import './App.css'
import InputTodo from './components/InputTodo'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

function App() {
 const [todoList, setTodoList] = useState(["Belajar"]);
 const [text, setText] = useState("")
  const handleChangeTodo = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = () => {
    setTodoList([...todoList, text]);
    setText("");
  };

  const deleteTodoV1 = (idx) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(idx, 1);
    setTodoList(updatedTodoList);
  };
  
  return (
    <div className="App">
      <h1>Simple To-Do-List </h1>
      <InputTodo  onChange={handleChangeTodo} onSubmit={handleSubmit} value={text} />

      <ListHeader no="NO" title="Title" option="Option" />
      <div className="todoList__content">
      {todoList.map((todo, idx) => {
        return (
          <ListItem key={idx} no={idx + 1} title={todo} onDelete={() => deleteTodoV1(idx)} />
        )
      })}
  </div>
      </div>
      
  )
}

export default App
