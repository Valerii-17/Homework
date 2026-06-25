import { AppBar, Toolbar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import {Typography} from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static">

            <Toolbar>
                <Typography
                    variant="h6"
                    component={NavLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        fontWeight: "bold",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    My Portfolio
                </Typography>
                <Button
                    color="inherit"
                    component={NavLink}
                    to="/"
                    sx={{
                        "&.active": {
                            fontWeight: "bold",
                            textDecoration: "underline",
                        },
                    }}
                >
                    Home
                </Button>

                <Button
                    color="inherit"
                    component={NavLink}
                    to="/todo"
                    sx={{
                        "&.active": {
                            fontWeight: "bold",
                            textDecoration: "underline",
                        },
                    }}
                >
                    TODO
                </Button>

                <Button
                    color="inherit"
                    component={NavLink}
                    to="/swapi"
                    sx={{
                        "&.active": {
                            fontWeight: "bold",
                            textDecoration: "underline",
                        },
                    }}
                >
                    SWAPI
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;