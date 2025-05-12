import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <BrowserRouter>
      <div className='flex'>
        <nav className="bg-black w-[20%] p-4 rounded-l-2xl min-h-screen ">
          <div className="bg-gradient-to-br from-blue-300 to-pink-300 text-transparent bg-clip-text font-bold text-3xl mb-5">N Housipsm</div>
          <div className='text-white font-light space-y-5'>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-300 rounded">Dashboard</Link>
            <Link to="/transaction" className="block py-2 px-4 hover:bg-gray-300 rounded">Recent</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-gray-300 rounded">Bookmark</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-gray-300 rounded">Dowloanded</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-gray-300 rounded">Support</Link>
            <Link to="/services" className="block py-2 px-4 hover:bg-gray-300 rounded">Setting</Link>
          </div>
        </nav>

        <div className="w-full ">
          <Routes>
            <Route path='/' element={<Dashboard />} />
          
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
