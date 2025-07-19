import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    // todos: []
    todos: [{
        id: 1,
        text: "Hello world"
    }]
}

const todoslice = createSlice({
    name: "mytodo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        updatetodo: (state,action) => {
            const {id,updateText} = action.payload;
            const todoupdate = state.todos.find(todo => todo.id === id)
            if (todoupdate){
                todoupdate.text = updateText
            }
         },
        deletetodo: () => { }
    }
})

export const { addtodo } = todoslice.actions

export default todoslice.reducer