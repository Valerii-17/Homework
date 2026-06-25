import { Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";

const App = () => {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Header />

            <Container sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/swapi" element={<Swapi />} />
                </Routes>
            </Container>

            <Footer />
        </Box>
    );
};

export default App;