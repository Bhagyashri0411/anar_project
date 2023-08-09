import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    fetchTasks: (state, action) => {
      return action.payload;
    },
    completeTask: (state, action) => {
      const taskId = action.payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      );
    },
    incompleteTask: (state, action) => {
      const taskId = action.payload;
      return state.map((task) =>
        task.id === taskId ? { ...task, completed: false } : task
      );
    },
  },
});

export const { fetchTasks, completeTask, incompleteTask } = taskSlice.actions;
export default taskSlice.reducer;
