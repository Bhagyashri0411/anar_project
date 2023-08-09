import React, { useEffect } from 'react';
import TankList from './TaskList';
import { fetchTasks } from './Redux/taskSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import axios from 'axios';

export default () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        dispatch(fetchTasks(response.data));
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  }, [dispatch]);

  return (
    <div>
      <TankList records={tasks} />
    </div>
  );
};
