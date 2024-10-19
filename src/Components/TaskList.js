import { useState } from 'react';

export default function TaskList({ tasks, editTask, toggleComplete, deleteTask }) {
  const [editingId, setEditingId] = useState(null);
  const [editedTask, setEditedTask] = useState({ title: '', description: '', priority: '' });

  const handleEdit = (task) => {
    setEditingId(task.id);
    setEditedTask(task);
  };

  const handleSave = (e) => {
    e.preventDefault();
    editTask(editedTask);
    setEditingId(null); 
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-200 border-red-500'; 
      case 'medium':
        return 'bg-yellow-200 border-yellow-500'; 
      case 'low':
        return 'bg-green-200 border-green-500'; 
      default:
        return 'bg-gray-200 border-gray-500'; 
    }
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item p-4 my-2 rounded-lg shadow-md transition duration-200 ${getPriorityColor(task.priority)} ${task.completed ? 'opacity-60 line-through' : ''}`}
        >
          {editingId === task.id ? (
            <form onSubmit={handleSave} className="flex flex-col">
              <input
                className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                value={editedTask.title}
                onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
                required
              />
              <textarea
                className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                value={editedTask.description}
                onChange={(e) => setEditedTask({ ...editedTask, description: e.target.value })}
                required
              />
              <select
                className="mb-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
                value={editedTask.priority}
                onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 transition duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <h3 className="font-semibold text-lg">{task.title} ({task.priority})</h3>
              <p>{task.description}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => toggleComplete(task.id)}
                  className="bg-yellow-500 text-white py-1 px-3 rounded-md hover:bg-yellow-600 transition duration-200"
                >
                  {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                </button>
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
