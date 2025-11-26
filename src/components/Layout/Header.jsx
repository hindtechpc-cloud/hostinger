import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Blog Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">
              Your Blog
            </span>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  )
}

export default Header