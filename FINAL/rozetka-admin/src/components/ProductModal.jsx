import { useEffect } from "react";
import {
    Dialog,
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";

const fieldStyle = {
    "& .MuiOutlinedInput-root": {
        backgroundColor: "#FFFFFF",
        borderRadius: 0,
        height: 31,

        "& fieldset": {
            borderColor: "#BDBDBD",
        },

        "&:hover fieldset": {
            borderColor: "#9E9E9E",
        },

        "&.Mui-focused fieldset": {
            borderColor: "#44B26F",
        },
    },
};

const ProductModal = ({
                          open,
                          onClose,
                          onSubmit,
                          initialData = {},
                          title = "Add Product",
                      }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            category: "",
            name: "",
            count: "",
            price: "",
            weight: "",
            image: "",
        },
    });

    useEffect(() => {
        if (initialData) {
            reset({
                category: initialData.category || "",
                name: initialData.name || "",
                count: initialData.count || "",
                price: initialData.price || "",
                weight: initialData.weight || "",
                image: initialData.image || "",
            });
        } else {
            reset({
                category: "",
                name: "",
                count: "",
                price: "",
                weight: "",
                image: "",
            });
        }
    }, [initialData, reset]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            sx={{
                "& .MuiPaper-root": {
                    backgroundColor: "#D9D9D9",
                    borderRadius: 0,
                    padding: 3,
                },
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 2,
                        background: "#FFFFFF",
                        margin: -3,
                        padding: 3,
                        height: 65,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: 29,
                            fontWeight: 700,
                            color: "#C1C1C1",
                        }}
                    >
                        {title}
                    </Typography>

                    <IconButton onClick={onClose}>
                        <CloseIcon
                            sx={{
                                fontSize: 40,
                                color: "#000",
                            }}
                        />
                    </IconButton>
                </Box>


            <Box sx={{ mt: 4 }} >

                {[
                    {
                        label: "Category",
                        name: "category",
                        placeholder: "Enter category",
                    },
                    {
                        label: "Name",
                        name: "name",
                        placeholder: "Enter name",
                    },
                    {
                        label: "Quantity",
                        name: "count",
                        placeholder: "0",
                        type: "number",
                    },
                    {
                        label: "Price",
                        name: "price",
                        placeholder: "0",
                        type: "number",
                    },
                    {
                        label: "Weight",
                        name: "weight",
                        placeholder: "Enter weight",
                    },
                    {
                        label: "Photo",
                        name: "image",
                        placeholder: "Image URL",
                    },
                ].map((field) => (
                    <Box key={field.name} sx={{mb: 1 }}>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontSize: 17,
                                mb: 0.5,
                            }}
                        >
                            {field.label}
                        </Typography>

                        <TextField
                            fullWidth
                            type={field.type || "text"}
                            placeholder={field.placeholder}
                            {...register(field.name, {
                                required: `${field.label} is required`,
                            })}
                            error={!!errors[field.name]}
                            helperText={errors[field.name]?.message}
                            sx={fieldStyle}
                        />
                    </Box>
                ))}

                <Box sx={{ mb: 1 }}>
                    <Typography
                        sx={{
                            color: "#FFFFFF",
                            fontSize: 17,
                            mb: 0.5,
                        }}
                    >
                        Description
                    </Typography>

                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        placeholder="Description..."
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                backgroundColor: "#FFFFFF",
                                borderRadius: 0,
                                alignItems: "flex-start",

                                "& fieldset": {
                                    borderColor: "#BDBDBD",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#9E9E9E",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#44B26F",
                                },
                            },
                        }}
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 2,
                        mt: 3,
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={onClose}
                        sx={{
                            width: 100,
                            backgroundColor: "#6D6666",
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontWeight: 600,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#5B5656",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Cancel
                    </Button>

                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            width: 100,
                            backgroundColor: "#44B26F",
                            color: "#FFFFFF",
                            textTransform: "none",
                            fontWeight: 700,
                            boxShadow: "none",
                            "&:hover": {
                                backgroundColor: "#37985D",
                                boxShadow: "none",
                            },
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
            </Box>
        </Dialog>
    );
};

export default ProductModal;