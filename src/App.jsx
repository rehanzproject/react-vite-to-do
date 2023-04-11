import { useState } from 'react'
import './App.css'
import InputTodo from './components/InputTodo'
import ListHeader from './components/ListHeader'
import ListItem from './components/ListItem'

function App() {
 const [todoList, setTodoList] = useState(["Belajar"]);
 const [text, setText] = useState("")
 const [isEdit , setIsEdit ] = useState(false)
 
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

  const onUpdated = (idx) => {
  const selectedIndex =  todoList[idx]
  setText(selectedIndex)
  setIsEdit(true)
  }
  // 1. bikin button
  // 2. get array , terus taruh form
  // 3. ganti ke submit
  // 4. ambil data dari form , ganti di index tadi


  const updateTodo = (idx) => {
    setTodoList([...todoList, text]);
    setText("");
    setIsEdit(false)
  }
  
  return (
    <div className="App">
      <h1>Simple To-Do-List </h1>
      <InputTodo  onChange={handleChangeTodo} onSubmit={handleSubmit} value={text} isEdit={isEdit} />

      <ListHeader no="NO" title="Title" option="Option" />
      <div className="todoList__content">
      {todoList.map((todo, idx) => {
        return (
          <ListItem key={idx} no={idx + 1} title={todo} onDelete={() => deleteTodoV1(idx)} onEdit={() => onUpdated(idx)} />
        )
      })}
  </div>
      </div>
      
  )
}

export default App
