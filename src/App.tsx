import {FC, useState} from 'react';
import { ITodo } from './interfaces/interfaces';
import { NavBar } from './components/NavBar/NavBar';
import { ToDoForm } from './components/ToDoForm/ToDoForm';
import { ToDoList } from './components/TodoList/TodoList';
import './App.css';

const App: FC = (): JSX.Element => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const addTitle = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false,
    }

    setTodos(prev => [...prev, newTodo])
  }

  const toggleHandler = (id: number) => {
    const newTodos = todos.map(todo => {
      if(todo.id === id) todo.completed = !todo.completed
      
      return todo
    })
    
    setTodos(newTodos)
  }

  const removeHandler = (id: number) => {
    setTodos(prev => 
      prev.filter(todo => todo.id !== id))
  }

  return (
    <>
      <NavBar/>
      <div className='container'>
        <ToDoForm addTodo={addTitle} />
        <ToDoList 
          todos={todos}
          onToggle={toggleHandler}
          onRemove={removeHandler}
        />
      </div>
    </>
  )
}

export default App;
