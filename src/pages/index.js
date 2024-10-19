import { useState } from 'react';
import TaskList from '../Components/TaskList';
import TaskForm from '../Components/TaskForm';

export default function Home({ initialTasks }) {
  const [tasks, setTasks] = useState(initialTasks);

  
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1, completed: false }]);
  };

  
  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

 
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  
  const sortTasks = (tasks) => {
    return tasks
      .sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      })
      .sort((a, b) => a.completed - b.completed); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-extrabold text-center mb-6">Task Management App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={sortTasks(tasks)} 
        editTask={editTask}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export async function getServerSideProps() {
  
  const initialTasks = [];

  return {
    props: {
      initialTasks,
    },
  };
}
