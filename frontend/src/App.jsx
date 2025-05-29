import { useEffect, useState } from 'react';
import MatchCard from './MatchCard';
import { Box, Container, Typography, TextField, InputAdornment, CircularProgress, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  const [matches, setMatches] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for better UX
    setTimeout(() => {
      fetch('http://localhost:5000/api/matches')
        .then(res => res.json())
        .then(data => {
          setMatches(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 1000);
  }, []);

  const filtered = matches.filter(m =>
    m.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f0f23 0%, #4b0082 100%)',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        py: { xs: 4, lg: 10 },
      }}
    >
      {/* Animated Background Elements */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '-160px',
            right: '-160px',
            width: 320,
            height: 320,
            bgcolor: 'purple',
            borderRadius: '50%',
            filter: 'blur(64px)',
            opacity: 0.2,
            animation: 'pulse 4s ease-in-out infinite',
            mixBlendMode: 'multiply',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '-160px',
            left: '-160px',
            width: 320,
            height: 320,
            bgcolor: 'blue',
            borderRadius: '50%',
            filter: 'blur(64px)',
            opacity: 0.2,
            animation: 'pulse 4s ease-in-out 1s infinite',
            mixBlendMode: 'multiply',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 384,
            height: 384,
            bgcolor: 'indigo',
            borderRadius: '50%',
            filter: 'blur(64px)',
            opacity: 0.1,
            animation: 'pulse 4s ease-in-out 0.5s infinite',
            mixBlendMode: 'multiply',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </Box>

      {/* Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Box sx={{ display: 'inline-block', position: 'relative', mb: 2 }}>
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                borderRadius: '50%',
                filter: 'blur(24px)',
                opacity: 0.75,
                animation: 'pulse 4s ease-in-out infinite',
                zIndex: -1,
              }}
            />
            <Box
              sx={{
                bgcolor: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                borderRadius: '50%',
                p: 2,
                boxShadow: 6,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              <svg
                width="48"
                height="48"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: 'white' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                />
                <circle cx="12" cy="12" r="4" stroke="none" fill="white" fillOpacity="0.3" />
              </svg>
            </Box>
          </Box>

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontWeight: '900',
              fontSize: { xs: '3rem', lg: '4.5rem' },
              background: 'linear-gradient(90deg, #fff, #bfdbfe, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 1,
              lineHeight: 1.1,
            }}
          >
            LIVE SOCCER
          </Typography>
          <Box sx={{ display: 'inline-block', position: 'relative' }}>
            <Typography
              variant="h4"
              component="span"
              sx={{
                fontWeight: '300',
                color: '#93c5fd',
                letterSpacing: '0.2em',
              }}
            >
              UPCOMING MATCHES
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                bottom: -4,
                left: 0,
                right: 0,
                height: 4,
                borderRadius: 2,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                transformOrigin: 'left',
                animation: 'scaleX 1.5s ease-out 0.5s forwards',
                transform: 'scaleX(0)',
              }}
              className="animate-scale-x"
            />
          </Box>
        </Box>

        {/* Search Section */}
        <Box sx={{ maxWidth: 600, mx: 'auto', mb: 8 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search for your favorite team..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: '#93c5fd' }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: 3,
                color: 'white',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#3b82f6',
                },
                '& input': {
                  color: 'white',
                },
                '& input::placeholder': {
                  color: '#bfdbfe',
                },
              },
            }}
          />
        </Box>

        {/* Loading State */}
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
            <CircularProgress color="primary" size={64} />
          </Box>
        ) : (
          <Grid container spacing={4}>
            {filtered.length > 0 ? (
              filtered.map((match, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={i} sx={{ animationDelay: `${i * 100}ms`, animationName: 'fadeIn', animationFillMode: 'forwards', animationTimingFunction: 'ease-out' }}>
                  <MatchCard match={match} />
                </Grid>
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 10, color: 'rgba(255,255,255,0.7)' }}>
                <Typography variant="h5" gutterBottom>No matches found</Typography>
                <Typography>Try searching for a different team or check back later!</Typography>
              </Box>
            )}
          </Grid>
        )}
      </Container>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
      `}</style>
    </Box>
  );
}

export default App;
