import React from 'react';

function Navbar() {
  return (
    <div className="navbar bg-black h-20 relative">
      {/* Left side with Image */}
      <div className="flex items-center pl-4 relative z-10">
        <img
          src="/cart.png" // Path to your logo image
          alt="Logo"
          className="w-20 h-20 object-cover"
        />
      </div>

      {/* Right side with Navbar Menu */}
      <div className="flex-1 flex justify-end items-center pr-8">
        <ul className="menu menu-horizontal px-1 text-white flex space-x-6">
          <li><a href="/" className="hover:text-red-500">HOME</a></li>
          <li><a href="/menu" className="hover:text-red-500">MENU</a></li>
          <li><a href="/reservation" className="hover:text-red-500">MAKE A RESERVATION</a></li>
          <li><a href="/contact" className="hover:text-red-500">CONTACT US</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
