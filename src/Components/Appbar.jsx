
import React from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react"
import { FaShoppingCart, FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

function Appbar() {
  return (
    <Navbar
      fluid
      rounded
      className="bg-purple-700 px-6 py-4"
    >

      {/* Logo */}
      <NavbarBrand as={Link} to="/">
        <FaShoppingCart className="text-3xl text-white" />

        <span className="ml-3 self-center whitespace-nowrap text-xl font-bold text-white">
          E-Cart
        </span>
      </NavbarBrand>

      {/* Mobile Toggle */}
      <NavbarToggle className="text-white" />

      {/* Navigation */}
      <NavbarCollapse>

        {/* Wishlist */}
        <Link
          to="/whishlist"
          className="flex items-center gap-2 font-medium text-white transition duration-200 hover:text-purple-200"
        >
          <FaHeart className="text-lg" />
          <span>Wishlist</span>
        </Link>

        {/* Cart */}
        <Link
          to="/cart"
          className="flex items-center gap-2 font-medium text-white transition duration-200 hover:text-purple-200"
        >
          <FaShoppingCart className="text-lg" />
          <span>Cart</span>
        </Link>

      </NavbarCollapse>

    </Navbar>
  )
}

export default Appbar
