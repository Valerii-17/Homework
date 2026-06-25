import { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

const Todo = () => {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (!text.trim()) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
            },
        ]);

        setText("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <Card sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
            <CardContent>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                >
                    Todo List
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        display: "flex",
                        gap: 2,
                        p: 2,
                        mb: 3,
                    }}
                >
                    <input
                        style={{
                            flex: 1,
                            padding: "10px",
                            fontSize: "16px",
                            border: "1px solid #ccc",
                            borderRadius: "4px",
                        }}
                        type="text"
                        placeholder="Enter a task..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        onClick={addTodo}
                    >
                      <AddIcon />
                    </Button>
                </Paper>

                <List>
                    {todos.map((todo) => (
                        <ListItem
                            key={todo.id}
                            divider
                            secondaryAction={
                                <IconButton
                                    color="error"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            }
                        >
                            <ListItemText primary={todo.text} />
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};

export default Todo;