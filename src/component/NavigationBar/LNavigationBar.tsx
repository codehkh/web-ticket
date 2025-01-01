import React, { useState } from 'react'
import IconButton from '../Button/IconButton'

const LNavigationBar = () => {
  const [isOpen, setIsOpen] = useState(true)

  const navItems = [
    { icon: <img className="w-5 h-5" />, label: 'Dashboard', href: '/' },
  ]

  return (
    <div
      className={`
        h-screen bg-white shadow-lg 
        ${isOpen ? 'w-64' : 'w-20'} 
        transition-all duration-300
        fixed left-0 top-0
      `}
    >
      {/* Logo/Header Section */}
      <div className="p-4 border-b border-gray-200">
        <h1 className={`font-bold ${isOpen ? 'text-xl' : 'text-center'}`}>
          {isOpen ? 'Dashboard' : 'D'}
        </h1>
      </div>

      {/* Navigation Items */}
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center justify-center">
              {item.icon}
            </span>
            {isOpen && (
              <span className="ml-3 transition-opacity">{item.label}</span>
            )}
          </a>
        ))}
      </nav>

      {/* Toggle Button */}
      <IconButton
        sizeType={'small'}
        buttonColorType={'icon'}
        isActive={false}
        buttonClickCallbackF={() => setIsOpen(!isOpen)}
      />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute bottom-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
        aria-label={isOpen ? 'Collapse sidebar' : 'Expand sidebar'}
      >
        {isOpen ? '←' : '→'}
      </button>
    </div>
  )
}

export default LNavigationBar
