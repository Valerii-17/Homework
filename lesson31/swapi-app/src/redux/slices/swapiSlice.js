import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    person: null,
    isLoading: false,
};

export const swapi = createSlice({
    name: "swapi",
    initialState,
    reducers: {
        fetchStart: (state) => {
            state.isLoading = true;
        },

        fetchPerson: (state, action) => {
            state.person = action.payload;
            state.isLoading = false;
        },

        clearPerson: (state) => {
            state.person = null;
        },
    },
});

export const {
    fetchStart,
    fetchPerson,
    clearPerson,
} = swapi.actions;

export const getPerson = (id) => async (dispatch) => {
    dispatch(fetchStart());

    try {
        const data = await fetch(
            `https://swapi.py4e.com/api/people/${id}`
        );

        const response = await data.json();

        dispatch(fetchPerson(response));
    } catch (e) {
        console.log("Error", e);
    }
};