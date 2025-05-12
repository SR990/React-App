import React, { useState } from "react";


const defaultTasks = {
  todo: [
    { title: "Create API documentation", subtitle: "GHJ Application", priority: "High", progress: 75 },
    { title: "Optimize database queries", subtitle: "MNO Portal", priority: "High", progress: 0 },
  ],
  inProgress: [
    { title: "Update user authentication flow", subtitle: "ABC Dashboard", priority: "Medium", progress: 25 },
    { title: "Develop feature notifications", subtitle: "STU Portal", priority: "Medium", progress: 60 },
  ],
  completed: [
    { title: "Design the new user profile", subtitle: "DEF Platform", priority: "Low", progress: 50 },
    { title: "Test the new search functionality", subtitle: "BCD Platform", priority: "Medium", progress: 30 },
  ],
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "High": return "text-red-600 bg-red-100";
    case "Medium": return "text-blue-600 bg-blue-100";
    case "Low": return "text-yellow-600 bg-yellow-100";
    default: return "text-gray-600 bg-gray-100";
  }
};


const TaskCard = ({ task, onMove }) => (
  <div className="bg-white rounded-xl shadow p-4 space-y-2">
    <div>
      <h3 className="font-medium text-sm">{task.title}</h3>
      <p className="text-xs text-gray-500">{task.subtitle}</p>
    </div>
    <p className={`text-xs px-2 py-1 rounded ${getPriorityColor(task.priority)}`}>
      {task.priority} Priority
    </p>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: `${task.progress}%` }}
      ></div>
    </div>
    <p className="text-right text-xs text-gray-500">{task.progress}% Complete</p>
    <div className="flex -space-x-2">
      {[...Array(3)].map((_, i) => (
        <img
          key={i}
          src={`https://i.pravatar.cc/150?img=${i + 1}`}
          className="w-6 h-6 rounded-full border-2 border-white"
          alt="avatar"
        />
      ))}
    </div>
    <button
      onClick={onMove}
      className="mt-2 text-blue-600 text-sm hover:underline"
    >
      Move to Next Column
    </button>
  </div>
);


const TaskColumn = ({ title, color, tasks, onMove }) => (
  <div>
    <div className="flex items-center gap-2 font-semibold mb-3">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      {title} ({tasks.length})
    </div>
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} onMove={() => onMove(task)} />
      ))}
    </div>
  </div>
);


const Kanban = () => {
  const [tasks, setTasks] = useState(defaultTasks);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    subtitle: "",
    priority: "Medium",
    progress: 0,
    column: "todo",
  });

  const filterTasks = (column) =>
    column.filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  const addTask = () => {
    if (!newTask.title || !newTask.subtitle) {
      alert("Please fill in both title and subtitle.");
      return;
    }

    const updated = { ...tasks };
    updated[newTask.column].push({ ...newTask, progress: Number(newTask.progress) });
    setTasks(updated);
    setNewTask({ title: "", subtitle: "", priority: "Medium", progress: 0, column: "todo" });
    setShowModal(false);
  };

  const moveToNextColumn = (task) => {
    const columns = ["todo", "inProgress", "completed"];
    const current = columns.find((col) => tasks[col].includes(task));
    const next = columns[columns.indexOf(current) + 1];
    if (!next) return;

    const updated = { ...tasks };
    updated[current] = updated[current].filter((t) => t !== task);
    updated[next].push(task);
    setTasks(updated);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Simple Kanban Board</h1>

      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 border rounded w-full md:w-1/3"
        />
        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TaskColumn
          title="To Do"
          color="bg-red-500"
          tasks={filterTasks(tasks.todo)}
          onMove={moveToNextColumn}
        />
        <TaskColumn
          title="In Progress"
          color="bg-yellow-400"
          tasks={filterTasks(tasks.inProgress)}
          onMove={moveToNextColumn}
        />
        <TaskColumn
          title="Completed"
          color="bg-green-500"
          tasks={filterTasks(tasks.completed)}
          onMove={moveToNextColumn}
        />
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow w-96">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>

            {["Title", "Subtitle"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="block text-sm">{field}</label>
                <input
                  type="text"
                  value={newTask[field.toLowerCase()]}
                  onChange={(e) =>
                    setNewTask({ ...newTask, [field.toLowerCase()]: e.target.value })
                  }
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}

            <div className="mb-3">
              <label className="block text-sm">Priority</label>
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="block text-sm">Progress (%)</label>
              <input
                type="number"
                value={newTask.progress}
                onChange={(e) => setNewTask({ ...newTask, progress: e.target.value })}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm">Column</label>
              <select
                value={newTask.column}
                onChange={(e) => setNewTask({ ...newTask, column: e.target.value })}
                className="w-full p-2 border rounded"
              >
                <option value="todo">To Do</option>
                <option value="inProgress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded text-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={addTask}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kanban;
