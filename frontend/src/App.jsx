import { useEffect, useState } from 'react';
import MatchCard from './MatchCard';

function App() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/matches')
      .then(res => res.json())
      .then(data => setMatches(data));
  }, []);

  const filtered = matches.filter(m => 
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen p-10">
      <header className="max-w-7xl mx-auto flex items-center mb-12">
        <div className="bg-blue-600 rounded-full p-4 shadow-lg">
          <svg
            className="w-10 h-10 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 2C8.13 2 5 5.13 5 9c0 3.87 7 13 7 13s7-9.13 7-13c0-3.87-3.13-7-7-7z"
            ></path>
            <circle cx="12" cy="9" r="2" stroke="none" fill="white" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 ml-6 drop-shadow-sm">
          Upcoming Soccer Matches
        </h1>
      </header>
      <input
        type="text"
        placeholder="Search team..."
        className="mb-8 p-4 rounded-xl w-full max-w-xl mx-auto block border border-gray-300 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {filtered.length > 0 ? (
          filtered.map((match, i) => <MatchCard key={i} match={match} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full text-lg font-medium">
            No matches found.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
