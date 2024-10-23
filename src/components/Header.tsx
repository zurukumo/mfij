import { Link } from 'react-router-dom'

import logo from '/logo.png'

export const Header = () => (
  <header className="fixed top-0 z-10 flex h-16 w-full items-center justify-center bg-blue-500">
    <Link to="/" className="flex items-center space-x-6 text-white hover:opacity-80">
      <img src={logo} alt="Orlando Magic Logo" className="h-8" />
      <div className="text-xl font-semibold">Magic Fan in Japan</div>
    </Link>
  </header>
)
