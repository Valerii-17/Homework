import {
    fireEvent,
    render,
    screen,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import todoReducer from "./slices/todoSlice";

describe("Todo App", () => {
    beforeEach(() => {
        const store = configureStore({
            reducer: {
                todo: todoReducer,
            },
        });

        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    });

    test("renders header", () => {
        expect(
            screen.getByRole("heading", {
                name: "Todo List",
            })
        ).toBeInTheDocument();
    });

    test("renders input", () => {
        expect(
            screen.getByPlaceholderText("Enter task")
        ).toBeInTheDocument();
    });

    test("can include text and numbers", () => {
        const input = screen.getByPlaceholderText("Enter task");

        fireEvent.change(input, {
            target: {
                value: "12345",
            },
        });

        expect(input).toHaveValue("12345");

        fireEvent.change(input, {
            target: {
                value: "Task123",
            },
        });

        expect(input).toHaveValue("Task123");
    });

    test("show required error", async () => {
        fireEvent.click(
            screen.getByRole("button", {
                name: "Add",
            })
        );

        expect(
            await screen.findByText("Field is required")
        ).toBeInTheDocument();
    });

    test("show minimum length error", async () => {
        const input = screen.getByPlaceholderText("Enter task");

        fireEvent.change(input, {
            target: {
                value: "abc",
            },
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Add",
            })
        );

        expect(
            await screen.findByText("Minimum 5 characters")
        ).toBeInTheDocument();
    });

    test("should start with zero todos", () => {
        expect(
            screen.getByText("Total todos: 0")
        ).toBeInTheDocument();
    });

    test("add new todo", async () => {
        const input = screen.getByPlaceholderText("Enter task");

        fireEvent.change(input, {
            target: {
                value: "Learn React",
            },
        });

        fireEvent.click(
            screen.getByRole("button", {
                name: "Add",
            })
        );

        expect(
            await screen.findByText("Total todos: 1")
        ).toBeInTheDocument();
    });
});