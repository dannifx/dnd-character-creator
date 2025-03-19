import React from 'react';
import { Link } from 'react-router-dom';

interface Character {
  id: string;
  name: string;
  race: string;
  class: string;
  level: number;
}

const CharacterList: React.FC = () => {
  // This would typically come from your backend or local storage
  const characters: Character[] = [];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-dnd text-white">Your Characters</h1>
        <Link
          to="/create"
          className="bg-dnd-red hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Create New Character
        </Link>
      </div>

      {characters.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-400">No characters created yet</p>
          <Link
            to="/create"
            className="inline-block mt-4 text-white hover:text-gray-200"
          >
            Create your first character
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((character) => (
            <div
              key={character.id}
              className="bg-dnd-brown p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-dnd text-white">{character.name}</h2>
              <div className="mt-4 space-y-2 text-gray-300">
                <p>Race: {character.race}</p>
                <p>Class: {character.class}</p>
                <p>Level: {character.level}</p>
              </div>
              <button className="mt-4 text-white hover:text-gray-200 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterList; 