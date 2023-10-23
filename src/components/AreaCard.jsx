import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

export default function AreaCard() {
  return (
    <Card sx={{ maxWidth: 330,margin:'10px',flex:{xs:'100%',sm:'45%',md:'30%'} }}>
      <Link to='/post' style={{ textDecoration: 'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../pd.jpg"
          alt="green iguana"
          />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            Podcast
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>
  );
}
