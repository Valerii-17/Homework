import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Paper,
    TextField,
    Typography,
} from "@mui/material";

import {
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";

import logo from "../assets/logo.svg";

const LoginPage = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        if (
            data.username === "admin" &&
            data.password === "12345"
        ) {
            setLoginError("");

            localStorage.setItem("token", "token");

            navigate("/products");
        } else {
            setLoginError("Invalid username or password");
        }
    };

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#44B26F",
                p: 2,
            }}
        >
            <Paper
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                elevation={4}
                sx={{
                    width: 500,
                    p: 5,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 3,
                }}
            >
                <img
                    src={logo}
                    alt="Rozetka"
                    style={{
                        width: 180,
                    }}
                />

                <TextField
                    label="User Name"
                    fullWidth
                    {...register("username", {
                        required: "User name is required",
                    })}
                    onChange={() => setLoginError("")}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                />

                <TextField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    fullWidth
                    {...register("password", {
                        required: "Password is required",
                    })}
                    onChange={() => setLoginError("")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                />

                {loginError && (
                    <Typography
                        color="error"
                        sx={{
                            width: "100%",
                            fontSize: 14,
                        }}
                    >
                        {loginError}
                    </Typography>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        backgroundColor: "#44B26F",
                        "&:hover": {
                            backgroundColor: "#3da562",
                        },
                        py: 1.2,
                        fontSize: 18,
                        textTransform: "none",
                        fontWeight: 600,
                    }}
                >
                    Login
                </Button>
            </Paper>
        </Box>
    );
};

export default LoginPage;