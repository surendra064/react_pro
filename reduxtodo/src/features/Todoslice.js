import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [{
    text: 'hii vro',
    id: 1,
  }]
}

export const todoslice = createSlice({
  name: "todo",
  initialState,  // Corrected to initialState
  reducers: {
    addTodo: (state, action) => {
      const item = { text: action.payload, id: nanoid() };
      state.todos.push(item);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    change: (state, action) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id? action.payload:todo );
    }
    
  }
})

export const { addTodo, removeTodo,change} = todoslice.actions;

export default todoslice.reducer;
