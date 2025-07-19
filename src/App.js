import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import AddMovie from './components/AddMovie';
import { Box, Typography } from '@mui/material'; // Import manquant ajouté
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Trailer from './components/Trailer';
import { MovieSharp } from '@mui/icons-material';
function App() {
  const [movies, setMovies] = useState([
  {
    name: "Beasts of No Nation",
    posterurl: "https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQcsOKPBHHBH4i2JGy0OJI3l4blWwCHjoewRWeLWaZ_n6yzjtW56apfhfQcc2Pb2WGfEAs2Qgs71OA4oTEocr3LZTPcE.jpg?r=b78",
    description: "As civil war rages in Africa, a fierce warlord (Idris Elba) trains a young orphan (Abraham Attah) to join his group of guerrilla soldiers.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/2xb9Ty-1frw" // Bande-annonce YouTube
  },
  {
    name: "13 Hours in Benghazi",
    posterurl: "https://occ-0-1068-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABRse3fgA3r6z5xMgjuVJlZlaXk8VKMNHxTV6f6_hcHVoTOwQka7dA48iui2uaWf77kkExQVywKkNVDwEB9T4Z9ofiTrl.jpg?r=44a",
    description: "A security team consisting of six members fights to defend an American diplomatic compound in Benghazi, Libya, against a wave of terrorist attacks.",
    rating: 4,
    videoUrl: "https://www.youtube.com/embed/5MBjAN7jqsQ"
  },
  {
    name: "The Circle",
    posterurl: "https://m.media-amazon.com/images/S/pv-target-images/e1bd6a8e161dca864a56dcd78b5782b2872148bb2238578e62b3a44ca65777e6.jpg",
    description: "Mae is ecstatic to be employed in the biggest tech company in the world. But after she gets involved in an experiment that could change the world, she realises its adverse consequences.",
    rating: 2,
    videoUrl: "https://www.youtube.com/embed/QUlr8Am4zQ0"
  },
  {
    name: "Inception",
    posterurl: "https://static2.srcdn.com/wordpress/wp-content/uploads/2020/03/Inception-characters-film-crew.jpg",
    description: "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    rating: 3,
    videoUrl: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    name: "Shutter Island",
    posterurl: "https://www.neuroetpsycho.com/wp-content/uploads/2025/01/Shutter-island-1024x576.webp",
    description: "A U.S. Marshal investigates a psychiatric facility on a remote island after one of the patients goes missing.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/5iaYLCiq5RM"
  },
  {
    name: "Warcraft",
    posterurl: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-243610-8J07_WF0170_COMP_143639R_G_SRGB_000000_HR.jpg",
    description: "A few human survivors must team up with a group of dissenting Orcs to stop an Orc horde from invading their planet through a magic portal.",
    rating: 1,
    videoUrl: "https://www.youtube.com/embed/RhFMIRuHAL4"
  },
  {
    name: "The Godfather",
    posterurl: "https://m.media-amazon.com/images/M/MV5BYWNlN2U4YjQtMzI3NC00ZjkxLWEwMTItYWRlNDUxYTYwYjVlXkEyXkFqcGdeQWpvaG5oYXJ0.V1_UX477_CR0,0,477,268_AL.jpg",
    description: "The Godfather is an American film series that consists of three crime films directed by Francis Ford Coppola inspired by the 1969 novel of the same name by Italian American author Mario Puzo.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/sY1S34973zA"
  },
  {
    name: "Taxi Driver",
    posterurl: "https://www.indiewire.com/wp-content/uploads/2016/04/taxi-driver-1.jpg?w=670&h=377&crop=1",
    description: "Travis, an ex-marine and Vietnam veteran, works as a taxi driver in New York City. One day, he is driven to save an underage prostitute from her pimp in an effort to clean the city of its corruption.",
    rating: 3,
    videoUrl: "https://www.youtube.com/embed/T5IligQP7Fo"
  },
  {
    name: "Fight Club",
    posterurl: "https://img.huffingtonpost.com/asset/5bb49916220000ba01dc2840.jpeg?ops=scalefit_630_noupscale",
    description: "Discontented with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. The project soon spirals down into something sinister.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/qtRKdVHc-cE"
  },
  {
    name: "The Lord of the Rings",
    posterurl: "https://imgix.bustle.com/uploads/image/2020/1/21/7f69561d-3863-4b82-8196-f6bfd3074f03-lord-of-the-rings-frodo-sam-ftr.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    description: "The Lord of the Rings is a film series of three epic fantasy adventure films directed by Peter Jackson, based on the novel written by J. R. R. Tolkien. The films are subtitled The Fellowship of the Ring, The Two Towers, and The Return of the King.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/V75dMMIW2B4"
  },
  {
    name: "Dachra",
    posterurl: "https://cdn.nawaat.org/wp-content/uploads/2018/11/DACHRA-3-2000px.jpg",
    description: "A young journalism student and her friends become trapped in an isolated village while trying to solve a gruesome criminal case that is over 25 years old.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/3Y5Q0XwC3q4"
  },
  {
    name: "Paper Lives",
    posterurl: "https://m.media-amazon.com/images/M/MV5BZmYxMDNmN2QtYzkyOS00YWVmLTkzNGEtNzYzOTBkZTBkZjk0XkEyXkFqcGc@.V1.jpg",
    description: "Mehmet runs a solid waste warehouse in an impoverished Istanbul neighbourhood, where he helps everyone in need, especially homeless children and teenagers. One day, Mehmet meets a homeless 8-year-old boy who changes his life.",
    rating: 2,
    videoUrl: "https://www.youtube.com/embed/9W2xlsbP9Rw"
  },
  {
    name: "Seaspiracy",
    posterurl: "https://i.guim.co.uk/img/media/0b019b69ec3c618610bd78a84f39e491ac65fde2/120_0_3600_2160/master/3600.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=f792f8e3427117d08ad88b2dc68d68ae",
    description: "Seaspiracy is a 2021 documentary film about the environmental impact of fishing directed by and starring Ali Tabrizi, a British filmmaker. The film premiered on Netflix globally in March 2021 and garnered immediate attention in several countries.",
    rating: 5,
    videoUrl: "https://www.youtube.com/embed/1Q5CXN7soQg"
  }
]);
 const [selectedRating, setSelectedRating] = useState(0);
const [searchTerm, setSearchTerm] = useState('');
const [isAddModalOpen, setIsAddModalOpen] = useState(false);

const filteredMovies = movies.filter(movie => {
  const matchesRating = selectedRating === 0 || movie.rating === selectedRating;
  const matchesSearch = movie.name.toLowerCase().includes(searchTerm.toLowerCase());
  return matchesRating && matchesSearch;
});

const handleAddMovie = (newMovie) => {
  setMovies([...movies, {
    ...newMovie,
    id: Date.now()
  }]);
  setIsAddModalOpen(false);
};

const captions = [
  {
    id: 1,
    title: "Avengers: Endgame",
    description: "La conclusion épique de la saga Marvel",
  },
  {
    id: 2,
    title: "Dune: Part Two",
    description: "L'épopée continue sur Arrakis",
  },
  {
    id: 3,
    title: "Spider-Man: No Way Home",
    description: "Le multivers s'ouvre",
  }
];

return (
  <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
    {/* Navbar fixée en haut */}
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1100,
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      background: 'linear-gradient(to right, #1a1a2e, #16213e)'
    }}>
      <Navbar 
        selectedRating={selectedRating}
        onRatingChange={setSelectedRating}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        searchTerm={searchTerm}
      />
    </Box>

    {/* Espacement pour compenser la navbar fixe */}
    <Box sx={{ height: { xs: '80px', sm: '90px' } }} />

    {/* Contenu principal avec Routes */}
    <Routes>
      <Route path="/" element={
        <>
          {/* Conteneur pour la vidéo et les légendes */}
          <Box sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '300px', sm: '450px', md: '600px' },
            overflow: 'hidden',
            mb: 4,
            borderRadius: { xs: 0, sm: '16px' },
            mx: 'auto',
            maxWidth: '1800px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
          }}>
            {/* Vidéo YouTube en iframe */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wX0lDn6yGmQ?autoplay=0&controls=1&mute=1&loop=1&playlist=wX0lDn6yGmQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                objectFit: 'cover'
              }}
            />
            
            {/* Overlay sombre */}
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.8) 100%)',
              zIndex: 1
            }} />

            {/* Carrousel pour les légendes */}
            <Carousel 
              interval={8000} 
              pause={'hover'} 
              indicators
              controls={false}
              style={{ 
                position: 'absolute',
                bottom: '20%',
                left: 0,
                right: 0,
                zIndex: 2
              }}
            >
              {captions.map((caption) => (
                <Carousel.Item key={caption.id}>
                  <Box sx={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderRadius: 2,
                    padding: 3,
                    margin: '0 auto',
                    width: { xs: '90%', md: '80%' },
                    maxWidth: '800px',
                    textAlign: 'center',
                    backdropFilter: 'blur(4px)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    <Typography variant="h4" sx={{ 
                      color: 'white', 
                      fontWeight: 'bold',
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                      fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                    }}>
                      {caption.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      color: 'white', 
                      mt: 1,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                      fontSize: { xs: '0.9rem', sm: '1.1rem' }
                    }}>
                      {caption.description}
                    </Typography>
                  </Box>
                </Carousel.Item>
              ))}
            </Carousel>
          </Box>

          {/* Liste des films */}
          <Box sx={{ 
            maxWidth: '1400px', 
            margin: '0 auto', 
            padding: { xs: 2, md: 4 },
            mt: 4
          }}>
            <MovieList 
              movies={filteredMovies} 
              onAddMovie={() => setIsAddModalOpen(true)} 
            />
          </Box>
        </>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/trailer/:name" element={<Trailer movies={movies}/>} />
    </Routes>
    
    {/* Modal d'ajout de film (hors Routes car doit être disponible partout) */}
    <AddMovie 
      open={isAddModalOpen}
      onClose={() => setIsAddModalOpen(false)}
      onAddMovie={handleAddMovie}
    />
    
    {/* Footer (hors Routes car doit être visible sur toutes les pages) */}
    <Footer />
  </div>
);}export default App;