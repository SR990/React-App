import { useState } from 'react';
import useOrders from '../hooks/useOrders';
import OrderSummary from './OrderSummary';

function Orders() {
const { data: orders, isLoading, error } = useOrders();
const [filter, setFilter] = useState('');
const [selectedOrder, setSelectedOrder] = useState(null);

const handleFilterChange = (e) => {
setFilter(e.target.value);
};

const handleRowClick = (order) => {
setSelectedOrder(order);
};

const handleCloseSummary = () => {
setSelectedOrder(null);
};

const filteredOrders = filter
? orders.filter(order => order.status === filter)
: orders;

if (isLoading) return <p className="p-4">Loading orders...</p>;
if (error) return <p className="p-4 text-red-500">Error loading orders</p>;

return ( <div className="p-6 bg-gray-100 w-full min-h-screen"> <div className="flex justify-between"> <h1 className="text-2xl font-semibold mb-6">Orders</h1> <select
       className="border border-gray-300 bg-white px-4 py-1 mb-2 rounded-2xl w-[10%] text-sm"
       onChange={handleFilterChange}
       value={filter}
     > <option value="">Filter</option> <option value="in progress">In Progress</option> <option value="served">Served</option> </select> </div>

```
  <div className="flex gap-6">
   
    <div
      className={`${
        selectedOrder ? 'w-2/3' : 'w-full'  
      } bg-white rounded-xl shadow p-6`}
    >
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-medium">Latest Orders</h2>
      </div>
      <table className="w-full text-sm text-left">
        <thead className="bg-red-50 text-gray-600 uppercase text-xs">
          <tr className="rounded-2xl">
            <th className="px-4 py-3">Order#</th>
            <th className="px-4 py-3">Time</th>
            <th className="px-4 py-3">Table</th>
            <th className="px-4 py-3">Reservation</th>
            <th className="px-4 py-3">Amount</th>
            <th className="px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map(order => (
            <tr
              key={order.id}
              className="text-gray-800 cursor-pointer hover:bg-gray-100"
              onClick={() => handleRowClick(order)} 
            >
              <td className="px-4 py-2">{order.id}</td>
              <td className="px-4 py-2">{order.time}</td>
              <td className="px-4 py-2">{order.table}</td>
              <td className="px-4 py-2">{order.reservation}</td>
              <td className="px-4 py-2">${order.amount}</td>
              <td className="px-4 py-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'in progress'
                      ? 'bg-yellow-100 text-amber-800'
                      : 'bg-green-100 text-green-700'
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

   
    {selectedOrder && (
      <div className="w-1/3">
        <OrderSummary
          order={selectedOrder} 
          onClose={handleCloseSummary} 
        />
      </div>
    )}
  </div>
</div>


);
}

export default Orders;
