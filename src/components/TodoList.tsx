import React from "react";
import TodoItem from "./TodoItem";
import { Box } from "@mui/material";

interface Todo {
    id: number;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
    return (
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
    );
};

export default TodoList;
