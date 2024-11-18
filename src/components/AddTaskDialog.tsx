import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


interface FormDialogProps {
    addTodo: (text: string) => void;
}

const FormDialog: React.FC<FormDialogProps> = ({ addTodo }) => {
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);

    //Open
    const handleClickOpen = () => {
        setOpen(true);
    };

    //Close
    const handleClose = () => {
        setOpen(false);
        setInput('');
    };

    //AddTodo
    const handleAddTodo = () => {
        if (input.trim() !== '') {
            addTodo(input);
            handleClose();
        }
    };

    return (
        <React.Fragment>
            <Button variant="outlined" onClick={handleClickOpen}>
                タスクを追加
            </Button>
            
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries((formData as any).entries());
                        const email = formJson.email;
                        console.log(email);
                        handleClose();
                    },
                }}
            >
                <DialogTitle>タスクを追加</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        fullWidth
                        margin="dense"
                        type="text"
                        variant="standard"
                        label="TODOを追加"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>キャンセル</Button>
                    <Button
                        variant="contained"
                        onClick={handleAddTodo}
                        disabled={!input.trim()}
                    >
                        追加</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
export default FormDialog;