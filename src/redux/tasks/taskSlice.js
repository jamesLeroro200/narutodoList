import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name:"todo",

    initialState:[
        {id:1, content:"Etudier demain", completed:true},
        {id:2, content:"Manger à midi", completed: false},
        {id:3, content:"Aller au ciné", completed: true}
    ],

    reducers:{
        addTask:(state, action) => {
            state.push(action.payload);
            return state;
        },
        editTask:(state, action) => {
            state[action.payload.id-1]={
                id: action.payload.id,
                content: action.payload.content,
                completed: action.payload.completed
            };
            return state;
        },
        deleteTask:(state, action) => {
            state= state.filter(t => t.id !== action.payload);
            return state;
        },
        deleteAllTasks:(state) => {
            state=[];
            return state;
        }
    }
});