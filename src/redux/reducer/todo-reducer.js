import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  count: 0,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      return { ...state, todoList: [...state.todoList, action.payload] };
    },
  },
});
export default todoSlice.reducer;
export const { addTodo } = todoSlice.actions;
