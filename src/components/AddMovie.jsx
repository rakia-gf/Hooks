import React from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

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

const AddMovie = ({ open, onClose, onAddMovie }) => {
  const [rating, setRating] = React.useState(3);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [posterUrl, setPosterUrl] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newMovie = {
      name: title,
      description: description,
      posterurl: posterUrl,
      rating: rating
    };

    onAddMovie(newMovie);
    
    // Réinitialiser le formulaire
    setTitle('');
    setDescription('');
    setPosterUrl('');
    setRating(3);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 2
      }}>
        <Typography variant="h6" component="h2" gutterBottom>
          Ajouter un film
        </Typography>
        
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ 
            '& .MuiTextField-root': { 
              m: 1, 
              width: '100%' 
            },
            display: 'flex',
            flexDirection: 'column'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="title"
            label="Titre"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          
          <TextField
            required
            id="description"
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          
          <TextField
            id="poster-url"
            label="URL de l'affiche"
            variant="outlined"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
          />

          <Box sx={{ m: 1 }}>
            <Typography component="legend">Note</Typography>
            <StyledRating
              name="movie-rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
            />
          </Box>
          
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
            
            <Button type="submit" variant="contained" color="primary">
              Ajouter
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddMovie;