import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Slider,Box } from '@mui/material';

export default function BigCard() {
  return (
    <Card sx={{ width:'80%',margin:'20px' }}>
      <CardMedia
        sx={{ height: 200 }}
        image="pd.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>

      <Slider
  size="small"
  
  aria-label="Small"
  valueLabelDisplay="auto"
/>
        <PlayArrowIcon fontSize='large'/>
  </Box>
        
      </CardActions>
    </Card>
  );
}
