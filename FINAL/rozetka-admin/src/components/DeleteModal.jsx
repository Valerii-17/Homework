import {
    Dialog,
    Box,
    Typography,
    Button,
} from "@mui/material";

const DeleteModal = ({
                         open,
                         onClose,
                         onConfirm,
                     }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    width: 429,
                    minHeight: 146,
                    borderRadius: 0,
                    overflow: "hidden",
                },
            }}
        >
            <Box
                sx={{
                    p: 3,
                    bgcolor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    sx={{
                        color: "#16B14B",
                        fontSize: 18,
                        fontWeight: 700,
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    Are u sure you want to delete this product?
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 4,
                    }}
                >
                    <Button
                        onClick={onClose}
                        variant="contained"
                        sx={{
                            width: 128,
                            height: 39,
                            borderRadius: 0,
                            backgroundColor: "#D9D9D9",
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontWeight: 700,
                            fontSize: 16,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#C8C8C8",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        onClick={onConfirm}
                        variant="contained"
                        sx={{
                            width: 128,
                            height: 39,
                            borderRadius: 0,
                            backgroundColor: "#FF0000",
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontWeight: 700,
                            fontSize: 16,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#E00000",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Delete
                    </Button>
                </Box>
            </Box>
        </Dialog>
    );
};

export default DeleteModal;