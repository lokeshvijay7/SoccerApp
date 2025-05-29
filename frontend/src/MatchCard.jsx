import { useState } from 'react';

function MatchCard({ match }) {
  const { title, date, thumbnail } = match;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const formattedDate = new Date(date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const formatTeamNames = (title) => {
    // Extract team names from title (assuming format like "Team A vs Team B")
    const teams = title.split(' vs ');
    return teams.length === 2 ? teams : [title, ''];
  };

  const [team1, team2] = formatTeamNames(title);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
      
      {/* Main Card */}
      <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            } ${isHovered ? 'scale-110' : 'scale-100'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)}
          />
          
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          
          {/* Live Badge */}
          <div className="absolute top-4 right-4">
            <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg animate-pulse">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                <span>Live</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Teams Section */}
          <div className="mb-4">
            {team2 ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg font-bold truncate flex-1 mr-2">
                    {team1}
                  </span>
                  <div className="bg-white/20 rounded-full px-3 py-1">
                    <span className="text-white text-sm font-bold">VS</span>
                  </div>
                  <span className="text-white text-lg font-bold truncate flex-1 ml-2 text-right">
                    {team2}
                  </span>
                </div>
              </div>
            ) : (
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">
                {title}
              </h2>
            )}
          </div>

          {/* Date and Time */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2 text-blue-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-medium">{formattedDate}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Watch Live
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-xl transition-all duration-200 hover:scale-105">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
}

export default MatchCard;