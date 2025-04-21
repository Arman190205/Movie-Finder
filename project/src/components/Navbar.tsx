import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Film, Heart, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-200 shadow-md' : 'bg-gradient-to-b from-dark-300 to-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-2xl font-bold text-white"
            onClick={closeMenu}
          >
            <Film className="text-primary-500" size={28} />
            <span className="tracking-wide">MiniFlix</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition hover:text-primary-400 ${
                isActive('/') ? 'text-primary-400' : 'text-gray-300'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/search" 
              className={`text-sm font-medium transition hover:text-primary-400 ${
                isActive('/search') ? 'text-primary-400' : 'text-gray-300'
              }`}
            >
              <div className="flex items-center gap-1">
                <Search size={16} />
                <span>Search</span>
              </div>
            </Link>
            <Link 
              to="/watchlist" 
              className={`text-sm font-medium transition hover:text-primary-400 ${
                isActive('/watchlist') ? 'text-primary-400' : 'text-gray-300'
              }`}
            >
              <div className="flex items-center gap-1">
                <Heart size={16} />
                <span>Watchlist</span>
              </div>
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className={`block text-sm font-medium transition ${
                    isActive('/') ? 'text-primary-400' : 'text-gray-300'
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/search" 
                  className={`flex items-center gap-2 text-sm font-medium transition ${
                    isActive('/search') ? 'text-primary-400' : 'text-gray-300'
                  }`}
                  onClick={closeMenu}
                >
                  <Search size={16} />
                  <span>Search</span>
                </Link>
              </li>
              <li>
                <Link 
                  to="/watchlist" 
                  className={`flex items-center gap-2 text-sm font-medium transition ${
                    isActive('/watchlist') ? 'text-primary-400' : 'text-gray-300'
                  }`}
                  onClick={closeMenu}
                >
                  <Heart size={16} />
                  <span>Watchlist</span>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;