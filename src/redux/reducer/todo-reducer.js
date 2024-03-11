import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("todo") || {
  todoList: [],
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      state.count + 1;
      return { ...state, todoList: [...state.todoList, action.payload] };
    },

    deleteTodo: (state, action) => {
      state.count - 1;
      return {
        ...state,
        todoList: state.todoList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    },
  },
});
export default todoSlice.reducer;
export const { addTodo, deleteTodo } = todoSlice.actions;
