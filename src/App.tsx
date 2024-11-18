import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Sidebar from './components/Drawer';
import './App.css';
import FormDialog from './components/AddTaskDialog';

interface Todo {
  id: number;
  text: string;
}
const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // TODOを追加
  const addTodo = (text: string) => {
    setTodos([...todos, { id: Date.now(), text }]);
  };

  //TODOを削除
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="app-container">
      <Sidebar variant="permanent" />

      <div className="content">
        <h1>TODOアプリ</h1>
        <FormDialog addTodo={addTodo} />
        
        <div className='todolist'>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
