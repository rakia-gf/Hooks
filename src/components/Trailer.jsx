import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  styled
} from '@mui/material';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import Rating from '@mui/material/Rating';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

const Trailer = ({ movies }) => {
  const { name } = useParams();
  const selectedMovie = movies.find((movie) => movie.name === name);

  if (!selectedMovie) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" color="error">
          Film non trouvé
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: '1400px', margin: '0 auto', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        {selectedMovie.name}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        {/* Conteneur Vidéo */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>Bande-annonce</Typography>
          <Box sx={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              src={selectedMovie.videoUrl}
              title={selectedMovie.name}
              style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                borderRadius: '10px' 
              }}
              allowFullScreen
            />
          </Box>
        </Box>

        {/* Carte adaptée du MovieCard */}
        <Card sx={{ 
          width: { xs: '100%', md: '345px' },
          flexShrink: 0,
          alignSelf: 'flex-start'
        }}>
          <CardHeader
            title={selectedMovie.name}
            sx={{ textAlign: 'left' }}
          />
          <CardMedia
            component="img"
            height="194"
            image={selectedMovie.posterurl}
            alt={selectedMovie.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {selectedMovie.description}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <StyledRating
                name="highlight-selected-only"
                value={selectedMovie.rating}
                IconContainerComponent={IconContainer}
                getLabelText={(value) => customIcons[value].label}
                highlightSelectedOnly
                readOnly
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Trailer;