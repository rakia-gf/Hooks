import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ mt: 10, mb: 5 }}>
      <Box textAlign="center">
        <Typography variant="h4" gutterBottom>
          Contactez-nous
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Vous avez une question ou une suggestion ? Remplissez le formulaire ci-dessous.
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth label="Nom" margin="normal" />
          <TextField fullWidth label="Adresse Email" type="email" margin="normal" />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            margin="normal"
          />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            Envoyer
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
