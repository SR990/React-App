import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { sale: 10, month: "Jan" },
    { sale: 95, month: "Feb" },
    { sale: 87, month: "Mar" },
    { sale: 88, month: "May" },
    { sale: 65, month: "Jun" },
    { sale: 90, month: "Aug" },
  ];

function Overview() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6 pt-4 pl-2">Overview</h2>
  

        <div className="grid grid-cols-4 gap-4 mb-6 p-5">
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Incoming</p>
            <h3 className="text-2xl font-bold">$20,000</h3>
            <p className="text-green-600 text-sm mt-2">↑ 20% increase</p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Outgoing</p>
            <h3 className="text-2xl font-bold">$15,000</h3>
            <p className="text-red-500 text-sm mt-2">↓ 40% decrease</p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Profit</p>
            <h3 className="text-2xl font-bold">$1000</h3>
            <p className="text-green-600 text-sm mt-2">↑ 80% increase</p>
          </div>
  
          <div className="bg-white p-4 rounded shadow">
            <p className="text-gray-500">Current Balance</p>
            <h3 className="text-2xl font-bold">$22,000</h3>
            <p className="text-red-500 text-sm mt-2">↓ 10% decrease</p>
          </div>
        </div>
  
        
        <div className="grid grid-cols-3 gap-4 p-5">
          <div className="col-span-2 bg-white h-100  items-center justify-center text-gray-400 rounded-2xl p-4">
            <div className='flex justify-between'>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Analytics Report</h2>
            <div className='flex justify-between space-x-4'>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Total Income</h2>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Monthly</h2>
                
            </div>
            </div>
          
            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={data}>
                <CartesianGrid stroke="#e5e7eb" vertical={false} />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line type="monotone" dataKey="sale" stroke="#14b8a6" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4 bg-white w-full rounded-2xl p-4">
            <div className="flex justify-between">
                <h3 className="font-semibold">My Cards</h3>
                <p>View All</p>
                </div>
            <div className="bg-green-100 p-4 rounded-2xl text-sm">💳 1234 XXXX XXXX 3090</div>
            <div className="bg-yellow-100 p-4 rounded-2xl text-sm">💳 1234 XXXX XXXX 3090</div>
            <div className="bg-red-100 p-4 rounded-2xl text-sm">💳 1234 XXXX XXXX 3090</div>
            <div className="bg-blue-100 p-4 rounded-2xl text-sm">💳 1234 XXXX XXXX 3090</div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Overview
  