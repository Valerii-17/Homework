import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import ProductsPage from "../pages/ProductsPage";
import PreviewPage from "../pages/PreviewPage";
import PrivateRoute from "../components/PrivateRoute";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                <Route path="/login" element={<LoginPage />} />

                <Route
                    path="/products"
                    element={
                        <PrivateRoute>
                            <ProductsPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/preview"
                    element={
                        <PrivateRoute>
                            <PreviewPage />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;