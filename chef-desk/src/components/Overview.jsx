import React from "react";
import useOrders from "../hooks/useOrders";
import chair from "../icons/chair.png";
import bell from "../icons/bell.png";
import coin from "../icons/coin.png";
import time from "../icons/history.png";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";

const Overview = () => {
  const { data: orders, isLoading, error } = useOrders();
  const navigate = useNavigate();

  if (isLoading) return <div className="p-6">Loading orders...</div>;
  if (error) return <div className="p-6 text-red-500">Error fetching orders</div>;

  const chartData = [
    { time: "10:00", sales: 100 },
    { time: "11:00", sales: 200 },
    { time: "12:00", sales: 150 },
    { time: "13:00", sales: 250 },
    { time: "14:00", sales: 180 },
  ];

  const handleRowClick = (id) => {
    navigate(`/orders/${id}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen w-full">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      {/* Stat boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Occupancy */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Occupancy</p>
            <img src={chair} alt="chair" className="w-10 h-10 pt-2 bg-red-300 rounded-2xl" />
          </div>
          <p className="text-3xl font-bold pt-1">45</p>
          <p className="text-sm text-green-500">↑ 15% Up from last hour</p>
        </div>

        {/* Active Orders */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Active Orders</p>
            <img src={bell} alt="bell" className="w-10 h-10 pt-2 bg-yellow-300 rounded-2xl" />
          </div>
          <p className="text-3xl font-bold pt-1">5/10</p>
          <p className="text-sm text-green-500">↑ 15% Up from last hour</p>
        </div>

        {/* Revenue */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Today's Revenue</p>
            <img src={coin} alt="coin" className="w-10 h-10 pt-2 bg-green-300 rounded-2xl" />
          </div>
          <p className="text-3xl font-bold pt-1">$500</p>
          <p className="text-sm text-red-600">↓ 2% Down from last hour</p>
        </div>

        {/* Kitchen Queue */}
        <div className="bg-white p-4 rounded-2xl shadow space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">Kitchen Queue</p>
            <img src={time} alt="time" className="w-10 h-10 pt-2 bg-blue-300 rounded-2xl" />
          </div>
          <p className="text-3xl font-bold pt-1">$25</p>
          <p className="text-sm text-green-500">↑ 15% Up from last hour</p>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
       
        <div className="bg-white p-4 rounded-2xl shadow lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Latest Orders</h2>
          <table className="w-full text-left">
            <thead className="bg-amber-100">
              <tr className="text-gray-500 text-sm">
                <th className="py-2 px-4">Order#</th>
                <th className="py-2 px-4">Time</th>
                <th className="py-2 px-4">Table</th>
                <th className="py-2 px-4">Reservation</th>
                <th className="py-2 px-4">Amount</th>
                <th className="py-2 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  onClick={() => handleRowClick(order.id)}
                  className="border-b border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <td className="py-2 px-4">{order.id}</td>
                  <td className="py-2 px-4">{order.time}</td>
                  <td className="py-2 px-4">{order.table}</td>
                  <td className="py-2 px-4">{order.reservation}</td>
                  <td className="py-2 px-4">${order.amount}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`text-sm font-semibold px-3 py-1 inline-block text-center rounded-2xl ${
                        order.status === "served"
                          ? "bg-green-200 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   
        <div className="space-y-4">
          
          <div className="bg-white p-4 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold">Sales Performance</h2>
              <span className="text-sm text-red-500">Hourly</span>
            </div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#8884d8"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Selling Items */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="text-lg font-semibold mb-2">Top selling items</h2>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex justify-between">
                <span>Burgers</span>
                <span className="text-green-500">1658.00 ↑</span>
              </li>
              <li className="flex justify-between">
                <span>Ice Cream</span>
                <span className="text-green-500">1658.00 ↑</span>
              </li>
              <li className="flex justify-between">
                <span>Pizza</span>
                <span className="text-green-500">100.00 ↑</span>
              </li>
              <li className="flex justify-between">
                <span>Juices</span>
                <span className="text-green-500">1658.00 ↑</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
