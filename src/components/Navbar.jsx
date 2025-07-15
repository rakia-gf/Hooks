import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '#ddd',
  },
});

const customIcons = {
  1: { icon: <SentimentVeryDissatisfiedIcon color="error" />, label: 'Très insatisfait' },
  2: { icon: <SentimentDissatisfiedIcon color="error" />, label: 'Insatisfait' },
  3: { icon: <SentimentSatisfiedIcon color="warning" />, label: 'Neutre' },
  4: { icon: <SentimentSatisfiedAltIcon color="success" />, label: 'Satisfait' },
  5: { icon: <SentimentVerySatisfiedIcon color="success" />, label: 'Très satisfait' },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function Navbar({ selectedRating, onRatingChange, onSearchChange, searchTerm }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        bgcolor: scrolled ? 'rgba(13, 110, 253, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        color: scrolled ? 'white' : 'white'
      }}>
        <Typography variant="h6" component="div">
          Filmora
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <StyledRating
            value={selectedRating}
            onChange={(event, newValue) => onRatingChange(newValue)}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
            sx={{
              '& .MuiRating-icon': {
                color: scrolled ? 'white' : 'white'
              }
            }}
          />

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)',
            borderRadius: 1,
            px: 1,
            py: 0.5,
            transition: 'all 0.3s ease'
          }}>
            <SearchIcon sx={{ color: scrolled ? 'action.active' : 'rgba(0, 0, 0, 0.7)' }} />
            <InputBase
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={onSearchChange}
              sx={{ 
                width: 200,
                color: scrolled ? 'black' : 'rgba(0, 0, 0, 0.8)',
                '&::placeholder': {
                  color: scrolled ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.5)'
                }
              }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}