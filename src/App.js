import './App.css';
import React, { useState } from 'react';
import Input from './Components/Input';
import Todolist from './Components/Todolist';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className='out_line'>
      <header>
        <Input
          todos={todos}
          setTodos={setTodos}
        />
      </header>
      <footer>
        <Todolist
          todos={todos}
          setTodos={setTodos}
          doneLiist={false}
        />
        <Todolist
          todos={todos}
          setTodos={setTodos}
          doneLiist={true}
        />
      </footer>
    </div>
  );
}

export default App;
