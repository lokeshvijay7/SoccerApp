import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button, Chip, Stack } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MatchCard({ match }) {
  const { title, date, thumbnail, location, league, description } = match;
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
    const teams = title.split(' vs ');
    return teams.length === 2 ? teams : [title, ''];
  };

  const [team1, team2] = formatTeamNames(title);

  return (
    <Card
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        borderRadius: 3,
        boxShadow: isHovered ? 6 : 3,
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        {!imageLoaded && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              bgcolor: 'rgba(59, 130, 246, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                border: '4px solid rgba(255, 255, 255, 0.3)',
                borderTopColor: '#3b82f6',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          </Box>
        )}
        <CardMedia
          component="img"
          height="180"
          image={thumbnail}
          alt={title}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
          sx={{
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.7s ease',
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            transitionProperty: 'opacity, transform',
          }}
        />
        <Chip
          icon={<LiveTvIcon />}
          label="Live"
          color="error"
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            boxShadow: 3,
            animation: 'pulse 2s infinite',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        {team2 ? (
          <Stack spacing={1} mb={2}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" noWrap sx={{ flex: 1, mr: 1 }}>
                {team1}
              </Typography>
              <Chip label="VS" color="primary" size="small" sx={{ fontWeight: 'bold' }} />
              <Typography variant="h6" noWrap sx={{ flex: 1, ml: 1, textAlign: 'right' }}>
                {team2}
              </Typography>
            </Box>
            {league && (
              <Typography variant="body2" color="text.secondary" noWrap>
                League: {league}
              </Typography>
            )}
          </Stack>
        ) : (
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
        )}

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {formattedDate}
        </Typography>

        {location && (
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Location: {location}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
        )}
      </CardContent>

      <Box sx={{ display: 'flex', gap: 1, p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<LiveTvIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Watch Live
        </Button>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<FavoriteIcon />}
          sx={{ fontWeight: 'bold' }}
        >
          Favorite
        </Button>
      </Box>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
      `}</style>
    </Card>
  );
}

export default MatchCard;
