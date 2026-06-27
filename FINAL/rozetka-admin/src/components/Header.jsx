import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import logo from "../assets/logo-white.svg";

const Header = ({ onAddProduct, onLogout }) => {
    const navigate = useNavigate();

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 4,
                }}
            >
                <img
                    src={logo}
                    alt="Rozetka"
                    style={{ width: 240 }}
                />

                <Button
                    variant="contained"
                    onClick={onLogout}
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#44B26F",
                        fontSize: 12,
                        textTransform: "none",
                        borderRadius: 2,
                        gap: 0.5,
                        minWidth: 80,
                        py: 1,
                    }}
                >
                    <LogoutOutlinedIcon
                        sx={{
                            fontSize: 18,
                            color: "#000",
                        }}
                    />

                    Logout
                </Button>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 5,
                }}
            >
                <Button
                    variant="contained"
                    onClick={() => navigate("/preview")}
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#44B26F",
                        fontSize: 16,
                        textTransform: "none",
                        borderRadius: 2,
                        gap: 1,
                    }}
                >
                    <PermIdentityOutlinedIcon
                        sx={{
                            fontSize: 26,
                            color: "#000",
                        }}
                    />

                    Preview
                </Button>

                <Button
                    variant="contained"
                    onClick={onAddProduct}
                    sx={{
                        backgroundColor: "#FFFFFF",
                        color: "#44B26F",
                        fontSize: 16,
                        textTransform: "none",
                        borderRadius: 2,
                        gap: 1,
                    }}
                >
                    <AddOutlinedIcon
                        sx={{
                            fontSize: 26,
                            color: "#000",
                        }}
                    />

                    Add Product
                </Button>
            </Box>

            <Typography
                variant="h3"
                align="center"
                sx={{
                    color: "#FFFFFF",
                    fontWeight: 700,
                    mb: 9,
                }}
            >
                Products
            </Typography>
        </>
    );
};

export default Header;