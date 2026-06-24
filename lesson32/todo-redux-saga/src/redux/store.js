import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import todoReducer from "./slices/todoSlice";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);