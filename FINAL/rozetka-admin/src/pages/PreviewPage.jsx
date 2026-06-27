import { useEffect } from "react";
import {
    Box,
    Typography,
    Button,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo-white.svg";
import { fetchProducts } from "../redux/slices/productSlice";

const ProductPreview = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { products } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#44B26F",
                pt: 3,
                pb: 5,
                px: 5,
            }}
        >
            <Box sx={{ mb: 3 }}>
                <img
                    src={logo}
                    alt="Rozetka"
                    style={{ width: 240 }}
                />
            </Box>

            <Button
                variant="contained"
                startIcon={<ArrowBackOutlinedIcon />}
                onClick={() => navigate("/products")}
                sx={{
                    backgroundColor: "#FFFFFF",
                    color: "#44B26F",
                    textTransform: "none",
                    borderRadius: 2,
                    mb: 5,

                    "& .MuiButton-startIcon svg": {
                        color: "#000000",
                    },

                    "&:hover": {
                        backgroundColor: "#F5F5F5",
                    },
                }}
            >
                Back
            </Button>

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 273px)",
                    justifyContent: "center",
                    gap: "160px",
                }}
            >
                {products.map((product) => (
                    <Box
                        key={product.id}
                        sx={{
                            width: 273,
                            height: 355,
                            backgroundColor: "#FFFFFF",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            borderRadius: 1,
                            px: 2,
                            pt: 2,
                            pb: 2,
                            transition: ".2s",

                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 8px 18px rgba(0,0,0,.15)",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                width: 230,
                                height: 175,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                                mb: 1,
                            }}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>

                        <Typography
                            align="center"
                            sx={{
                                fontSize: 16,
                                fontWeight: 600,
                                lineHeight: 1.2,
                                height: 42,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {product.name}
                        </Typography>

                        <Typography
                            sx={{
                                color: "#8A8A8A",
                                fontSize: 13,
                                mb: 1,
                            }}
                        >
                            {product.category}
                        </Typography>

                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                mb: 1,
                            }}
                        >
                            <Typography
                                sx={{
                                    color: "#FF5A00",
                                    fontSize: 23,
                                    fontWeight: 700,
                                }}
                            >
                                ${Number(product.price).toLocaleString()}
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}
                            >
                                Qty: {product.count}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                mt: "auto",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <LocalShippingOutlinedIcon
                                sx={{
                                    color: "#44B26F",
                                    fontSize: 20,
                                }}
                            />

                            <Typography
                                sx={{
                                    color: "#44B26F",
                                    fontSize: 15,
                                    fontWeight: 600,
                                }}
                            >
                                Ready to ship
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default ProductPreview;