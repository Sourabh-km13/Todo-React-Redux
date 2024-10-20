import { configureStore } from "@reduxjs/toolkit";
import bri from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: bri
})