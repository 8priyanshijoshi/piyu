import { configureStore } from "@reduxjs/toolkit";
import todoSlice from '../logic/todoSlice'

const mystore = configureStore({
    reducer: {
        todos: todoSlice,
    }
})

export default mystore;