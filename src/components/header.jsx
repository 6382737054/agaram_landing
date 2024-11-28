// Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Home,
  Award,
  RefreshCw,
  Briefcase,
  Settings,
  Phone,
  LogIn,
  Menu,
  X
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { title: 'Home', icon: <Home className="w-4 h-4" />, path: '/' },
    { title: 'C.S Roll of Honour', icon: <Award className="w-4 h-4" />, path: '/cs-roll-of-honour' },
    { title: 'Transfer', icon: <RefreshCw className="w-4 h-4" />, path: '/transfer' },
    { title: 'Current Posting', icon: <Briefcase className="w-4 h-4" />, path: '/currentposting' },
    { title: 'Services', icon: <Settings className="w-4 h-4" />, path: '/services' },
    { title: 'Contact', icon: <Phone className="w-4 h-4" />, path: '/contact' },
  ];

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <header className="bg-gradient-to-r from-amber-50 to-amber-100 border-b border-amber-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo and Title Section */}
          <Link to="/" className="flex items-center space-x-4">
            <img
              src="/tnlogo.png"
              alt="Agaram Logo"
              className="w-12 h-12 object-contain"
            />
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif text-amber-900 tracking-wide">AGARAM</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center space-x-2 text-amber-900 hover:text-amber-700 transition-colors duration-200 group"
              >
                <span className="group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.title}</span>
              </Link>
            ))}
            <button 
              onClick={handleLogin}
              className="flex items-center space-x-2 bg-amber-800 hover:bg-amber-900 text-amber-50 px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm font-medium">Login</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-900 hover:text-amber-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-amber-50/95 backdrop-blur-sm absolute left-0 right-0 border-b border-amber-200 shadow-lg">
            <div className="flex flex-col space-y-4 max-w-7xl mx-auto px-4">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.path}
                  className="flex items-center space-x-2 text-amber-900 hover:text-amber-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.title}</span>
                </Link>
              ))}
              <button 
                onClick={() => {
                  handleLogin();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 bg-amber-800 hover:bg-amber-900 text-amber-50 px-4 py-2.5 rounded-lg transition-colors duration-200 w-full justify-center"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm font-medium">Login</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;