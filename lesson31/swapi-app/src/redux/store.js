import { configureStore } from "@reduxjs/toolkit";
import { swapi } from "./slices/swapiSlice";

export const store = configureStore({
    reducer: {
        swapi: swapi.reducer,
    },
});