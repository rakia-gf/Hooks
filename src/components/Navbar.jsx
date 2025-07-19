import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  InputBase, 
  Box,
  Button,
  useMediaQuery,
  useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom'; // ✅ IMPORT

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: alpha(theme.palette.common.white, 0.3),
  },
}));

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
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const open = Boolean(anchorEl);

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

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed"
      sx={{ 
        bgcolor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
        backdropFilter: scrolled ? 'blur(10px)' : 'blur(5px)',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        color: 'white',
        py: 1
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography 
            variant="h6" 
            component="div"
            sx={{
              fontWeight: 600,
              letterSpacing: 1.1,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            Filmora
          </Typography>

          {/* ✅ Ajout des liens pour desktop */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                component={Link} 
                to="/" 
                color="inherit"
                sx={{
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Films
              </Button>
              <Button 
                component={Link} 
                to="/about" 
                color="inherit"
                sx={{
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                À propos
              </Button>
              <Button 
                component={Link} 
                to="/contact" 
                color="inherit"
                sx={{
                  fontWeight: 500,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)'
                  }
                }}
              >
                Contact
              </Button>
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {!isMobile && (
            <StyledRating
              value={selectedRating}
              onChange={(event, newValue) => onRatingChange(newValue)}
              IconContainerComponent={IconContainer}
              getLabelText={(value) => customIcons[value].label}
              highlightSelectedOnly
              sx={{
                '& .MuiRating-icon': {
                  color: 'white',
                  fontSize: '1.8rem'
                }
              }}
            />
          )}

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: 2,
            px: 1.5,
            py: 0.8,
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.25)'
            }
          }}>
            <SearchIcon sx={{ 
              color: 'white',
              mr: 1
            }} />
            <InputBase
              placeholder="Rechercher..."
              value={searchTerm}
              onChange={onSearchChange}
              sx={{ 
                width: isMobile ? 120 : 200,
                color: 'white',
                '&::placeholder': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  opacity: 1
                }
              }}
            />
          </Box>

          {isMobile && (
            <>
              <Button
                color="inherit"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{ minWidth: 'auto' }}
              >
                <MenuIcon fontSize="medium" />
              </Button>
              <Menu
                id="mobile-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                  'aria-labelledby': 'mobile-menu',
                }}
                PaperProps={{
                  sx: {
                    bgcolor: 'rgba(0, 0, 0, 0.95)',
                    backdropFilter: 'blur(20px)',
                    color: 'white',
                    minWidth: 200,
                    mt: 1.5
                  }
                }}
              >
                <MenuItem 
                  component={Link} 
                  to="/" 
                  onClick={handleMenuClose} 
                  sx={{ py: 1.5 }}
                >
                  Films
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/about" 
                  onClick={handleMenuClose} 
                  sx={{ py: 1.5 }}
                >
                  À propos
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/contact" 
                  onClick={handleMenuClose} 
                  sx={{ py: 1.5 }}
                >
                  Contact
                </MenuItem>
                <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.1)', my: 1 }} />
                <Box sx={{ px: 2, py: 1 }}>
                  <Typography variant="subtitle2" sx={{ mb: 1 }}>
                    Filtre par note
                  </Typography>
                  <StyledRating
                    value={selectedRating}
                    onChange={(event, newValue) => {
                      onRatingChange(newValue);
                      handleMenuClose();
                    }}
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    sx={{
                      '& .MuiRating-icon': {
                        color: 'white',
                        fontSize: '1.8rem'
                      }
                    }}
                  />
                </Box>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
