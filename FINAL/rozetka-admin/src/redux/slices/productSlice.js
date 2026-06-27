import { createSlice } from "@reduxjs/toolkit";
import api from "../../services/api";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },

        setProducts(state, action) {
            state.products = action.payload;
        },

        addProductSuccess(state, action) {
            state.products.push(action.payload);
        },

        updateProductSuccess(state, action) {
            state.products = state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );
        },

        deleteProductSuccess(state, action) {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },

        setError(state, action) {
            state.error = action.payload;
        },
    },
});

export const {
    setLoading,
    setProducts,
    addProductSuccess,
    updateProductSuccess,
    deleteProductSuccess,
    setError,
} = productSlice.actions;

export default productSlice.reducer;

// ======================= GET =======================

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const { data } = await api.get("/list");

        dispatch(setProducts(data));
    } catch (error) {
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

// ======================= POST =======================

export const addProduct = (product) => async (dispatch) => {
    try {
        const { data } = await api.post("/list", product);

        dispatch(addProductSuccess(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// ======================= PUT =======================

export const updateProduct = (id, product) => async (dispatch) => {
    try {
        const { data } = await api.put(`/list/${id}`, product);

        dispatch(updateProductSuccess(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
};

// ===================== DELETE ======================

export const deleteProduct = (id) => async (dispatch) => {
    try {
        await api.delete(`/list/${id}`);

        dispatch(deleteProductSuccess(id));
    } catch (error) {
        dispatch(setError(error.message));
    }
};