import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Facebook, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-400 text-gray-300 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <Film className="text-primary-500" size={24} />
              <span>MiniFlix</span>
            </Link>
            <p className="max-w-xs text-sm text-gray-400">
              Discover and enjoy the latest trending movies and TV shows. Save your favorites to your watchlist and never miss out.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-primary-400 transition">Home</Link></li>
                <li><Link to="/search" className="hover:text-primary-400 transition">Search</Link></li>
                <li><Link to="/watchlist" className="hover:text-primary-400 transition">Watchlist</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="#" className="hover:text-primary-400 transition">Terms of Service</Link></li>
                <li><Link to="#" className="hover:text-primary-400 transition">Privacy Policy</Link></li>
                <li><Link to="#" className="hover:text-primary-400 transition">Cookie Policy</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary-400 transition" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-400 transition" aria-label="GitHub">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} MiniFlix. All rights reserved.</p>
          <p className="mt-2">This is a demo project. Not affiliated with any real streaming service.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;