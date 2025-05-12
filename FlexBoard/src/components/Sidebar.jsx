import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-white text-black p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">✜ FlexBoard</h1>
      <nav className="space-y-2">
        <NavLink to="/" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Dashboard
        </NavLink>
        <NavLink to="/kanban" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Kanban Board
        </NavLink>
        <NavLink to="/projects" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Projects
        </NavLink>
        <NavLink to="/tasks" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Tasks
        </NavLink>
        <NavLink to="/teams" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Teams
        </NavLink>
        <NavLink to="/reports" className="block px-4 py-2 rounded hover:bg-gray-700 text-black hover:text-white">
          Reports
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
