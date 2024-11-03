import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Registered } from "./register";

function Header() {
  const { isRegistered, toggleRegistered } = Registered();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleMouseEnterDropdown = () => setDropdownOpen(true);
  const handleMouseLeaveDropdown = () => setDropdownOpen(false);

  const handleLoginLogout = () => {
    toggleRegistered();
    isRegistered ? alert("Logged out") : navigate("/login");
  };

  return (
    <div className="bg-black text-white h-20 w-full">
      <div className="flex justify-between items-center h-full px-4 w-full">
        
        {/* Logo */}
        <Link to="/" className="text-green-400 font-bold text-2xl">
          Uprice
        </Link>
        
        {/* Center - Dropdown and Search */}
        <div className="flex items-center space-x-4">
          
          {/* Dropdown Button */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnterDropdown}
            onMouseLeave={handleMouseLeaveDropdown}
          >
            <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-black-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-black dark:hover:bg-green-700 dark:focus:ring-green-800">
              Category
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-10">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  {["gaming", "mobile", "tv", "audio", "appliances"].map((cat) => (
                    <li key={cat}>
                      <Link
                        to={`/category/${cat}`}
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          {/* Search Bar */}
          <input
            type="text"
            value={searchValue}
            placeholder="Find what you need"
            className="rounded-full text-black p-2 w-96 px-4"
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="button" onClick={() => navigate(`/search?query=${searchValue}`)}>
            <img src="./../img/search.svg" alt="Search" />
          </button>
        </div>
        
        {/* Right Side - Shopping Cart and Account */}
        <div className="flex items-center space-x-4">
          <Link to="/cart">
            <img src="./../img/shop_card.svg" alt="Shopping Cart" className="mx-2" />
          </Link>
          {isRegistered ? (
            <button className="bg-green-700 rounded hover:bg-green-800 mx-2 px-2" onClick={handleLoginLogout}>
              Log out
            </button>
          ) : (
            <>
              <button className="bg-green-700 rounded hover:bg-green-800 mx-2 px-2" onClick={handleLoginLogout}>
                Log in
              </button>
              <Link to="/signup">
                <button className="bg-green-700 rounded hover:bg-green-800 mx-2 px-2">
                  Sign up
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
