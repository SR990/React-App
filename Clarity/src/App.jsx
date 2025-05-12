import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Overview from './pages/Overview'
import Transaction from './pages/Transaction'

function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <nav className="bg-white w-[20%] p-4 ">
          <div className="text-black font-bold text-3xl mb-5">☍ Clarity</div>
          <div className='text-black font-semibold space-y-5'>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-300 rounded">Overview</Link>
            <Link to="/transaction" className="block py-2 px-4 hover:bg-gray-300 rounded">Transactions</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-gray-300 rounded">Services</Link>
          </div>
        </nav>

        {/* This will change based on route */}
        <div className="w-full ">
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/transaction' element={<Transaction />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
