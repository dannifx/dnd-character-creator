import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CharacterBuilder from './pages/CharacterBuilder';
import CharacterList from './pages/CharacterList';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dnd-gray text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CharacterList />} />
            <Route path="/create" element={<CharacterBuilder />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 