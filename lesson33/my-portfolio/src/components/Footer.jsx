import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            sx={{
                bgcolor: "#1976d2",
                color: "white",
                textAlign: "center",
                py: 2,
                mt: 4,
                mb: 4,
            }}
        >
            <Typography>
                Email: test@email.com
            </Typography>

            <Typography>
                GitHub: github.com/Valerii17
            </Typography>
        </Box>
    );
};

export default Footer;