import React from "react";
import { ListItem, ListItemText, CardContent, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoItemProps {
    todo: {
        id: number;
        text: string;
    };
    onDelite: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelite }) => {
    return (
        < ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={() => onDelite(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            }
        >
            <ListItemText primary={todo.text} />
        </ListItem >
    );
};

export default TodoItem;