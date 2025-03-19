import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-dnd-red shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-white text-2xl font-dnd">D&D Character Creator</span>
          </Link>
          <div className="flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-200 transition-colors">
              Characters
            </Link>
            <Link to="/create" className="text-white hover:text-gray-200 transition-colors">
              Create Character
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 