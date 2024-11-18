import React from 'react';
import TodoList from './components/TodoList';
import Sidebar from './components/Drawer';
import './App.css';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar variant="permanent" />
      <div className="content">
        <h1>TODOアプリ</h1>
        <div className='todolist'>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
