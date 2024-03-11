import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./reducer/count-reducer";
import todoSlice from "../redux/reducer/todo-reducer";
import { saveState } from "../config/storage";

export const store = configureStore({
  reducer: {
    count: countSlice,
    todoSlice: todoSlice,
  },
});
store.subscribe(() => {
  saveState("todo", store.getState().todoSlice);
});
