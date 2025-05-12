import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-white w-[15%] p-4">
      <h1 className="mb-4 text-red-600 text-2xl font-bold">⌑ Chef's Desk</h1>
      <ul className="space-y-6 font-light">
        <li className="hover:bg-red-100 cursor-pointer p-2 rounded">
          <Link to="/">Overview</Link>
        </li>
        <li className="hover:bg-red-100 cursor-pointer p-2 rounded">
          <Link to="/orders">Orders</Link>
        </li>
        <li className="hover:bg-red-100 cursor-pointer p-2 rounded">Inventory</li>
        <li className="hover:bg-red-100 cursor-pointer p-2 rounded">Staff</li>
        <li className="hover:bg-red-100 cursor-pointer p-2 rounded">Reports</li>
      </ul>
    </div> 
  )
}


export default Sidebar;
