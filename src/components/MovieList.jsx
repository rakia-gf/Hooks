import React from 'react';
import MovieCard from './MovieCard';
import {
  Container,
  Grid,
  Typography,
  Box,
  Fade,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
const MovieList = ({ movies, onAddMovie }) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Collection de Films
          </Typography>
          <Fab 
            color="primary" 
            aria-label="add" 
            onClick={onAddMovie}
           
            sx={{ 
              width: 60,
              height: 60,
              minHeight: 32,
              boxShadow: 'none',
              '&:hover': {
                boxShadow: 'none'
              }
            }}
          >
            <AddIcon fontSize="small" />
          </Fab>
        </Box>

        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{ mb: 2 }}
        >
          {movies.length} film{movies.length > 1 ? 's' : ''} trouvé{movies.length > 1 ? 's' : ''}
        </Typography>
      </Box>

      {movies.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant="h5" color="text.secondary">
            Aucun film trouvé
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Essayez de modifier vos critères de recherche ou effacez les filtres
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {movies.map((movie, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id || index}>
              <Fade in={true} timeout={300 + index * 100}>
                <div>
                  <MovieCard movie={movie} />
                </div>
              </Fade>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default MovieList;