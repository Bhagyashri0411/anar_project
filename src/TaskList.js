import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, incompleteTask } from './Redux/taskSlice.js';

const TankList = ({ records }) => {
  const dispatch = useDispatch();

  const handleTaskComplete = taskId => {
    dispatch(completeTask(taskId));
  };

  const handleInTaskComplete = taskId => {
    dispatch(incompleteTask(taskId));
  };


  return (
    <>
      <div>
        <h2>Task List</h2>

      </div>
      <div className='container'>

        <table className="table">
          <thead>
            <tr className="topHeader">
              <th>
                <div className="headerflex">
                  <button className="dropsection">
                      <i className="fa fa-angle-down iconstyle" ></i>
                    
                  </button>
                </div>
              </th>
              <th><i className="fa fa-calendar iconstyle" /> Status</th>
              <th><i className='fa fa-circle iconstyle'></i> Task Name</th>
            </tr>
          </thead>
          <tbody>

            {records.map((task, key) => (

              <tr className='bottomHeader' key={key}>
                <td className='text-center'>
                  {task.completed === true ?
                    <input
                      type="checkbox" onChange={() => handleInTaskComplete(task.id)} checked
                    />
                    :
                    <input
                      type="checkbox" onChange={() => handleTaskComplete(task.id)}
                    />

                  }
                </td>
                <td>
                  <div className={`status ${task.completed === true ? "" : "red"}`}>
                    {task.completed === true ? "Completed" : "Incompleted"}

                  </div>
                </td>
                <td className=''>{task.title}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  );
};

export default TankList;
