import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button, Chip } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MatchCard({ match }) {
  const { title, date, thumbnail, competition, matchviewUrl } = match;
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const formattedDate = new Date(date).toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  const handleWatchLive = () => {
    if (matchviewUrl) {
      window.open(matchviewUrl, '_blank');
    } else {
      alert('Live stream not available');
    }
  };

  const formatTeamNames = (title) => {
    const teams = title.split(' - ');
    return teams.length === 2 ? teams : [title, ''];
  };

  const [team1, team2] = formatTeamNames(title);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        borderRadius: 3,
        overflow: 'hidden',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.4)' 
          : '0 10px 20px rgba(0,0,0,0.2)',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {!imageLoaded && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                border: '3px solid rgba(255,255,255,0.1)',
                borderTopColor: 'rgba(255,255,255,0.7)',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          </Box>
        )}
        <CardMedia
          component="img"
          height="160"
          image={thumbnail}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          sx={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        <Chip
          icon={<LiveTvIcon sx={{ fontSize: 16 }} />}
          label="LIVE"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            backgroundColor: 'error.main',
            color: 'white',
            fontWeight: 600,
            fontSize: '0.75rem',
            height: 24,
            '& .MuiChip-icon': { color: 'white' },
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Box sx={{ mb: 2 }}>
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1,
            mb: 1
          }}>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.rem',
                flex: 1,
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {team1}
            </Typography>
            <Chip
              label="VS"
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.7)',
                height: 20,
                fontSize: '0.7rem',
                fontWeight: 600,
              }}
            />
            <Typography 
              variant="subtitle1" 
              sx={{ 
                fontWeight: 600,
                color: 'rgba(255,255,255,0.9)',
                fontSize: '0.9rem',
                flex: 1,
                textAlign: 'right',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                whiteSpace: 'nowrap'
              }}
            >
              {team2}
            </Typography>
          </Box>
          
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block',
              color: 'rgba(255,255,255,0.5)',
              mb: 0.5
            }}
          >
            {competition}
          </Typography>
          
          <Typography 
            variant="caption" 
            sx={{ 
              display: 'block',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            {formattedDate}
          </Typography>
        </Box>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          fullWidth
          variant="contained"
          startIcon={<LiveTvIcon />}
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            py: 1,
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
          }}
          onClick={handleWatchLive}
        >
          Watch Live
        </Button>
        
        <Button
          fullWidth
          variant="text"
          startIcon={<FavoriteIcon />}
          sx={{
            mt: 1,
            color: 'rgba(255,255,255,0.7)',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.05)',
            },
          }}
          onClick={() => alert('Add to Favorites clicked!')}
        >
          Add to Favorites
        </Button>
      </Box>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </Card>
  );
}

export default MatchCard;
