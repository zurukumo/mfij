import logo from 'logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to="/" className="hover:opacity-75">
        <img src={logo} alt="Orlando Magic Logo" className="h-8" />
      </Link>
      <Link
        to="/"
        className="font-semibold text-xl tracking-tight ml-5 hover:opacity-75"
      >
        Magic Juice
      </Link>
    </div>
  </nav>
);

export default Navbar;
