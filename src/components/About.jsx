import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          À propos de Filmora
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Filmora est une application dédiée aux passionnés de cinéma. Elle permet de découvrir, rechercher et noter vos films préférés.
          Notre objectif est de créer une communauté autour du 7ᵉ art, où chacun peut partager ses avis et découvrir de nouveaux chefs-d'œuvre.
        </Typography>
      </Box>
    </Container>
  );
}
