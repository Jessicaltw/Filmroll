import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import sudaImage from '../assets/img/suda.jpg';
import flowerImage from '../assets/img/flower.jpg';
import bnwImage from '../assets/img/bnw.webp';
import bnwfilmImage from '../assets/img/Ilford.webp';
import towerImage from '../assets/img/tower.webp';
import kodak200Image from '../assets/img/kodak200.png';
import kodak100Image from '../assets/img/kodak100.png';
import lomo100Image from '../assets/img/lomo100.png';
import fuji400Image from '../assets/img/fuji400.png';
import colorplusImage from '../assets/img/colorplus.png';
import sheepImage from '../assets/img/sheep.jpg';




const ScrollableBox = ({ children }) => {
  return (
    <Box sx={{ maxHeight: 800, overflowY: 'auto' }}>
      {children}
    </Box>
  )
}


export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: 800, overflowY: 'scroll'}}>
        <ScrollableBox>
      <Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 ,}}>
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '40%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={kodak200Image}
      alt="Album 2 cover"
    />
    <CardContent sx={{ color: 'white', paddingTop: '0.5rem', paddingBottom: '1rem' }}>
      <Typography sx={{ color: 'white' }} variant="subtitle1" color="text.secondary" component="div">
      Kodak Gold 200
      </Typography>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: '100%', height: '80%', padding: '1rem' }}
    image={sudaImage}
    alt="Album 2 cover"
  />
</Card>
      
      <Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '50%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={bnwfilmImage}
      alt="Album 2 cover"
    />
    <CardContent sx={{ color: 'white', paddingTop: '0rem', paddingBottom: '1rem' }}>
      <Typography sx={{ color: 'white' }} variant="subtitle1" color="text.secondary" component="div">
        Ilford XP2 Super
      </Typography>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: '100%', height: '80%', padding: '1rem' }}
    image={bnwImage}
    alt="Album 2 cover"
  />
</Card>



<Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '35%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={fuji400Image}
      alt="Album 2 cover"
    />
    <CardContent sx={{ color: 'white', paddingTop: '0rem', paddingBottom: '1rem' }}>
      <Typography sx={{ color: 'white' }} variant="subtitle1" color="text.secondary" component="div">
      FujiFilm 400
      </Typography>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: '100%', height: '80%', padding: '1rem' }}
    image={flowerImage}
    alt="Album 2 cover"
  />
</Card>

<Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '40%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={kodak100Image}
      alt="Album 2 cover"
    />
    <CardContent sx={{ color: 'white', paddingTop: '0.5rem', paddingBottom: '1rem' }}>
      <Typography sx={{ color: 'white' }} variant="subtitle1" color="text.secondary" component="div">
      Kodak Portra 400
      </Typography>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: '100%', height: '80%', padding: '1rem' }}
    image={sheepImage}
    alt="Album 2 cover"
  />
</Card>

<Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '35%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={colorplusImage}
      alt="Album 2 cover"
    />
    <CardContent sx={{ color: 'white', paddingTop: '1rem', paddingBottom: '1rem' }}>
      <Typography sx={{ color: 'white' }} variant="subtitle1" color="text.secondary" component="div">
        Kodak ColourPlus
      </Typography>
    </CardContent>
  </Box>
  <CardMedia
    component="img"
    sx={{ width: '100%', height: '80%', padding: '1rem' }}
    image={towerImage}
    alt="Album 2 cover"
  />
</Card>


</ScrollableBox>

    </Box>


  );
}
