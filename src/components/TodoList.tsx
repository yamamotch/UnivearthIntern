import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TextField, Button } from "@mui/material";

interface Todo {
  id: number;
  text: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  // TODOを追加する関数
  const addTodo = () => {
    if (input.trim() === '') return; // 空白の入力は追加しない
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div>
      <TextField 
        label="TODOを追加" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <Button variant="contained" onClick={addTodo} style={{ marginLeft: '8px' }}>
        追加
      </Button>
      <div style={{ marginTop: '16px' }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
