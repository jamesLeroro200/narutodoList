import {configureStore} from "@reduxjs/toolkit";
import {taskSlice} from "./tasks/taskSlice";
import {filterSlice} from "./filters/filterSlice";

export const actions = taskSlice.actions;

export const filterActions = filterSlice.actions;

export const store= configureStore({
   reducer: {
       todo: taskSlice.reducer,
       filter: filterSlice.reducer
   }
});