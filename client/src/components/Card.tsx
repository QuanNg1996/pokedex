
import { Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material';

interface PokemonData {
  pokemonName: string;
  image: string;
}

const PokemonCard = ({ pokemonName, image }: PokemonData): JSX.Element => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          alt={pokemonName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemonName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {pokemonName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default PokemonCard;