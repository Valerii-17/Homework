import { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    Paper,
    Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const Swapi = () => {
    const [id, setId] = useState("");
    const [person, setPerson] = useState(null);

    const getPerson = async () => {
        if (!id) return;

        const response = await fetch(
            `https://swapi.py4e.com/api/people/${id}/`
        );

        const data = await response.json();

        setPerson(data);
    };

    return (
        <Card sx={{ maxWidth: 700, mx: "auto", mt: 4 }}>
            <CardContent>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                >
                    Star Wars API
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
                        type="number"
                        placeholder="Enter ID..."
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        startIcon={<SearchIcon />}
                        onClick={getPerson}
                    >
                        Search
                    </Button>
                </Paper>

                {person && (
                    <pre
                        style={{
                            background: "#f5f5f5",
                            padding: "15px",
                            borderRadius: "8px",
                            overflowX: "auto",
                        }}
                    >
                        {JSON.stringify(person, null, 2)}
                    </pre>
                )}
            </CardContent>
        </Card>
    );
};

export default Swapi;