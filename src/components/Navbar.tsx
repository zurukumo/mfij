import { Link } from 'react-router-dom'

import logo from '/logo.png'

export const Navbar = () => (
  <nav className="flex w-full items-center justify-start bg-blue-500 p-4">
    <Link to="/" className="flex items-center space-x-6 text-white hover:opacity-80">
      <img src={logo} alt="Orlando Magic Logo" className="h-8" />
      <div className="text-xl font-semibold">Magic Fan in Japan</div>
    </Link>
  </nav>
)
