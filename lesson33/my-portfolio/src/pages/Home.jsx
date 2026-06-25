import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Stack,
    Typography,
} from "@mui/material";

const Home = () => {
    return (
        <Card sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
            <CardContent>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            backgroundColor: "#1976d2",
                            width: 100,
                            height: 100,
                            mb: 2,
                            fontSize: 40,
                        }}
                    >
                        V
                    </Avatar>

                    <Typography variant="h4">
                        Valerii Alistratov
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        gutterBottom
                    >
                         Junior Frontend Developer
                    </Typography>
                </Box>

                <Typography variant="h5" sx={{ mt: 3 }}>
                    About Me
                </Typography>

                <Typography sx={{ mt: 1 }}>
                    I am studying React and modern JavaScript.
                    I enjoy building web applications and improving my frontend skills.
                    Looking for my first Job.
                </Typography>

                <Typography variant="h5" sx={{ mt: 4 }}>
                    Skills
                </Typography>

                <Stack
                    direction="row"
                    spacing={1.5}
                    flexWrap="wrap"
                    sx={{ mt: 2 }}
                >
                    <Chip label="HTML" />
                    <Chip label="CSS" />
                    <Chip label="JavaScript" />
                    <Chip label="React" />
                    <Chip label="Material UI" />
                    <Chip label="Git" />
                    <Chip label="REST API" />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default Home;