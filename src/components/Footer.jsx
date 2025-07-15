import { Box, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, Email, Phone } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        py: 4,
        px: 2,
        mt: 'auto'
      }}
    >
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: 4
      }}>
        {/* Colonne 1 - À propos */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Filmora
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Votre plateforme de streaming préférée pour découvrir les derniers blockbusters et films cultes.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton aria-label="Facebook" sx={{ color: 'white' }}>
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" sx={{ color: 'white' }}>
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" sx={{ color: 'white' }}>
              <Instagram />
            </IconButton>
            <IconButton aria-label="YouTube" sx={{ color: 'white' }}>
              <YouTube />
            </IconButton>
          </Box>
        </Box>

        {/* Colonne 2 - Liens rapides */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Liens rapides
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <li>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Accueil
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Films
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Nouveautés
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover" sx={{ display: 'flex', alignItems: 'center' }}>
                Tendances
              </Link>
            </li>
          </Box>
        </Box>

        {/* Colonne 3 - Catégories */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Catégories
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Action
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Aventure
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Comédie
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit" underline="hover">
                Science-fiction
              </Link>
            </li>
          </Box>
        </Box>

        {/* Colonne 4 - Contact */}
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
            Contact
          </Typography>
          <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <li sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" />
              <Typography variant="body2">contact@cineverse.com</Typography>
            </li>
            <li sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" />
              <Typography variant="body2">+1 234 567 890</Typography>
            </li>
            <li>
              <Typography variant="body2">123 Rue du Cinéma</Typography>
              <Typography variant="body2">Paris, France 75000</Typography>
            </li>
          </Box>
        </Box>
      </Box>

      {/* Copyright */}
      <Box sx={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        mt: 4,
        pt: 3,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        textAlign: 'center'
      }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} Filmora. Tous droits réservés. | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>
            Politique de confidentialité
          </Link> | 
          <Link href="#" color="inherit" underline="hover" sx={{ ml: 1 }}>
            Conditions d'utilisation
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;