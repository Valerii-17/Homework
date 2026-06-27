import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
    Box,
    CircularProgress,
    Typography,
} from "@mui/material";

import Header from "../components/Header";
import ProductTable from "../components/ProductTable";
import ProductModal from "../components/ProductModal";
import DeleteModal from "../components/DeleteModal";

import { TOKEN_KEY } from "../constants";

import {
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
} from "../redux/slices/productSlice";

const ProductsPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const [openDelete, setOpenDelete] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);

    const [sortField, setSortField] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

    const { products, loading, error } = useSelector(
        (state) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddProduct = () => {
        setSelectedProduct(null);
        setOpenModal(true);
    };

    const handleEditProduct = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleDeleteProduct = (product) => {
        setProductToDelete(product);
        setOpenDelete(true);
    };

    const handleConfirmDelete = async () => {
        if (!productToDelete) return;

        await dispatch(deleteProduct(productToDelete.id));
        await dispatch(fetchProducts());

        setOpenDelete(false);
        setProductToDelete(null);
    };

    const handleSort = (field) => {
        if (sortField === field) {
            setSortOrder(
                sortOrder === "asc" ? "desc" : "asc"
            );
        } else {
            setSortField(field);
            setSortOrder("asc");
        }
    };

    const handleSave = async (data) => {
        if (selectedProduct) {
            await dispatch(
                updateProduct(selectedProduct.id, data)
            );
        } else {
            await dispatch(addProduct(data));
        }

        await dispatch(fetchProducts());

        setOpenModal(false);
        setSelectedProduct(null);
    };

    const handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        navigate("/login");
    };

    const sortedProducts = [...products];

    if (sortField) {
        sortedProducts.sort((a, b) => {
            let first = a[sortField];
            let second = b[sortField];

            if (
                sortField === "id" ||
                sortField === "count" ||
                sortField === "price"
            ) {
                first = Number(first);
                second = Number(second);
            } else {
                first = first
                    .toString()
                    .toLowerCase();
                second = second
                    .toString()
                    .toLowerCase();
            }

            if (first < second)
                return sortOrder === "asc" ? -1 : 1;

            if (first > second)
                return sortOrder === "asc" ? 1 : -1;

            return 0;
        });
    }

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <Typography color="error">
                {error}
            </Typography>
        );
    }

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
            <Box
                sx={{
                    maxWidth: "100%",
                    mx: "auto",
                }}
            >
                <Header
                    onAddProduct={handleAddProduct}
                    onLogout={handleLogout}
                />

                <ProductTable
                    products={sortedProducts}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                    onSort={handleSort}
                    sortField={sortField}
                    sortOrder={sortOrder}
                />

                <ProductModal
                    open={openModal}
                    onClose={() => {
                        setOpenModal(false);
                        setSelectedProduct(null);
                    }}
                    onSubmit={handleSave}
                    initialData={selectedProduct}
                    title={
                        selectedProduct
                            ? "Edit Product"
                            : "Add Product"
                    }
                />

                <DeleteModal
                    open={openDelete}
                    onClose={() => {
                        setOpenDelete(false);
                        setProductToDelete(null);
                    }}
                    onConfirm={handleConfirmDelete}
                />
            </Box>
        </Box>
    );
};

export default ProductsPage;