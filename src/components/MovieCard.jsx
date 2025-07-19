import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Link } from 'react-router-dom'; // ✅ IMPORT

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

function MovieCard({ movie }) {
  return (
    <Link to={`/trailer/${movie.name}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={movie.name}
        />
        <CardMedia
          component="img"
          height="194"
          image={movie.posterurl}
          alt=""
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {movie.description}
          </Typography>
          <StyledRating
            name="highlight-selected-only"
            value={movie.rating}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
            readOnly
          />
        </CardContent>
      </Card>
    </Link>
  );
}

export default MovieCard;