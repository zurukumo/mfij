import logo from 'logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-4">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <img src={logo} alt="Orlando Magic Logo" className="h-8" />
      <Link
        to="/"
        className="font-semibold text-xl tracking-tight ml-5 hover:opacity-75"
      >
        Magic Juice
      </Link>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          工事中
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
        >
          工事中
        </a>
        <a
          href="#responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
        >
          工事中
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
