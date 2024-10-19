import { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState({ title: '', description: '', priority: 'medium' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title && task.description) {
      addTask(task);
      setTask({ title: '', description: '', priority: 'medium' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col mb-4">
      <input
        className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        required
      />
      <select
        className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        value={task.priority}
        onChange={(e) => setTask({ ...task, priority: e.target.value })}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Add Task
      </button>
    </form>
  );
}
