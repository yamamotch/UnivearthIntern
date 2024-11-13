import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TextField, Button, Box } from "@mui/material";

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

    const deleteTodo = (id:number)=>{
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <Box sx={{ padding: 2 }}>
            <TextField
                label="TODOを追加"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Button
                variant="contained"
                onClick={addTodo}
                disabled={!input.trim()}
                sx={{ mt: 1 }}
            >
                追加
            </Button>
            <Box sx={{ me: 3 }}>
                {todos.length === 0 ? (
                    <p>TODOはありません。</p>
                ) : (
                    todos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDelite={deleteTodo}
                        />
                    ))
                )}
            </Box>
        </Box>
    );
};

export default TodoList;
