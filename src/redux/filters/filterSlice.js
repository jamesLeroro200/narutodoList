import {createSlice} from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filter",
    initialState: "Toutes",
    reducers:{
        switchToFilter:(state, action) => {
            state= action.payload;
            return state;
        }
    }
});