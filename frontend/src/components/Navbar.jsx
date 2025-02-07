import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartModal from '../pages/shop/productDetails/CartModal';
import { logout } from '../redux/features/auth/authSlice'; 
import avatarImg from "../assets/avatar.png";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const adminDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Items", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add New Post", path: "/dashboard/add-new-post" },
  ];

  const userDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const dropDownMenus = user?.role === 'admin' ? [...adminDropDownMenus] : [...userDropDownMenus];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-screen-2xl mx-auto px-4 py-3 flex justify-between items-center">

        <div className="nav__logo">
          <Link to="/#" onClick={scrollToTop} className="text-2xl font-bold text-gray-800">ShopEase<span>.</span></Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-2xl"></i>
          </button>
        </div>

        <ul className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <li>
            <Link 
              to="/#" 
              onClick={scrollToTop} 
              className="text-gray-700 hover:text-primary ml-6"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/search" 
              className="text-gray-700 hover:text-primary"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/about-us" 
              className="text-gray-700 hover:text-primary"
            >
              About Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-6 relative">

          <Link to="/search" className="text-gray-700 hover:text-primary">
            <i className="ri-search-line"></i>
          </Link>

        
          <button onClick={handleCartToggle} className="relative text-gray-700 hover:text-primary">
            <i className="ri-shopping-cart-2-line"></i>
            {products.length > 0 && (
              <sup className="absolute top-0 right-0 text-xs text-white bg-red-500 rounded-full px-1.5">
                {products.length}
              </sup>
            )}
          </button>

          {/* Profile and Dropdown */}
          {user ? (
            <div className="relative">
              <img
                onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                src={user.profileImage || avatarImg}
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover cursor-pointer"
              />
              {/* Dropdown Menu */}
              {isDropDownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-md z-50">
                  <ul className="space-y-2 py-2 px-3">
                    {dropDownMenus.map((menu, index) => (
                      <li key={index}>
                        <Link
                          onClick={() => setIsDropDownOpen(false)}
                          className="text-gray-800 hover:text-primary transition-all"
                          to={menu.path}
                        >
                          {menu.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-red-500 hover:bg-red-100 transition-all px-2 py-1 rounded-md w-full text-left"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="text-gray-700 hover:text-primary">
              <i className="ri-user-line"></i>
            </Link>
          )}
        </div>
      </nav>

      {/* Cart Modal */}
      {isCartOpen && (
        <CartModal
          products={products}
          isOpen={isCartOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
