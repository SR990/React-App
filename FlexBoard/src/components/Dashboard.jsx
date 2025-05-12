import { Link } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const lineData = [
  { month: "Jan", progress: 4000, time: 2400 },
  { month: "Feb", progress: 3000, time: 1398 },
  { month: "Mar", progress: 2000, time: 9800 },
  { month: "Apr", progress: 2780, time: 3908 },
  { month: "May", progress: 1890, time: 4800 },
  { month: "Jun", progress: 2390, time: 3800 },
];

const pieData = [
  { name: "Quantum Leap", value: 400 },
  { name: "Nebula Nexus", value: 300 },
  { name: "Echo System", value: 300 },
  { name: "Phoenix App", value: 200 },
];

const COLORS = ["#8884d8", "#00C49F", "#FFBB28", "#FF8042"];

const teamMembers = [
  { name: "Liam Carter", role: "Creative Interface Specialist", color: "bg-yellow-400" },
  { name: "Mia Thompson", role: "UX Architect", color: "bg-pink-500" },
  { name: "Noah Johnson", role: "Visual Designer", color: "bg-blue-500" },
  { name: "Emma Wilson", role: "Interaction Designer", color: "bg-purple-500" },
];

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Overview</Link>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          <div className="bg-white p-4 rounded shadow mb-4">
            <h3 className="text-lg font-medium mb-2">Team Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="progress" stroke="#8884d8" />
                <Line type="monotone" dataKey="time" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Teams</h3>
            <ul className="space-y-3">
              {teamMembers.map((member) => (
                <li key={member.name} className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full ${member.color} text-white flex items-center justify-center font-bold`}>
                    {member.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{member.name}</p>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-4">Latest Projects</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Quantum Leap Redesign</span>
                  <span className="text-sm text-gray-500">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Phoenix App</span>
                  <span className="text-sm text-gray-500">45%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
            </div>
          </div>

    
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Monthly Goal Stats</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={80} label>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
