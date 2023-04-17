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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from 'react';

import { Link } from 'react-router-dom';



function MyComponent() {
  const [brandFocused, setBrandFocused] = useState(false);
  const [isoFocused, setIsoFocused] = useState(false);
  
}



const ScrollableBox = ({ children }) => {
  return (
    <Box sx={{ maxHeight: 800, overflowY: 'auto' }}>
      {children}
    </Box>
  )
}

const Brands = [
  { label: 'Kodak'},
  { label: 'FujiFilm'},
  { label: 'Cira'},
];

const iso = [
  { label: '100'},
  { label: '200'},
  { label: '400'},
];

const CustomTextField = styled(TextField)(({ theme }) => ({

  '& .MuiSvgIcon-root': {
    color: 'white', // Change the color of the arrow icon here
  },

  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-shrink': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white'
  },
  '& input': {
    color: 'white', // Change the text color here
  },
}));

const CustomAutocomplete = styled(Autocomplete)`
  .MuiAutocomplete-popupIndicator {
    color: yellow;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #B47D0E;
    border-width: 0.75px;
    height: 54px;
    width:180;
  }
`;



export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  height: 800, overflowY: 'scroll',backgroundColor:'black'}}>
        <ScrollableBox>

        <Paper
  component="form"
  sx={{
    p: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent:'center',
    width: 350,
    margin: 'auto'
  }}
>
  <Box sx={{ mx: 'auto' }}>
    <InputBase
      sx={{ ml: 1 }}
      placeholder="Search Google Maps"
      inputProps={{ 'aria-label': 'search google maps' }}
    />
  </Box>
  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
    <SearchIcon />
  </IconButton>
  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
</Paper>



<Box sx={{ display: 'flex', flexDirection: 'row', justifyContent:'center', gap: 4, padding:'1rem',backgroundColor:'black' }}>
  <CustomAutocomplete
    disablePortal
    id="combo-box-demo"
    options={Brands}
    sx={{ width: 180, height: 50, backgroundColor:'black', border: '0.75px solid #B47D0E', borderRadius: 2,  }}
    renderInput={(params) => <CustomTextField {...params} label="brand" sx={{ color: 'red' }} variant="outlined"/>}
  />
  <CustomAutocomplete
    disablePortal
    id="combo-box-demo"
    options={iso}
    sx={{ width: 180, height: 50,backgroundColor:'black' ,  border: '0.75px solid #B47D0E',borderRadius: 2}}
    renderInput={(params) => <CustomTextField {...params} label="iso" sx={{ color: 'red' }} variant="outlined"/>}
  />
</Box>
     
    <Card sx={{ display: 'flex', width: 500, height: 200, backgroundColor:'black', borderRadius: 0 ,}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%',height: '100%' }}>
    <Link to='/roll'>
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '40%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={kodak200Image}
      alt="Album 2 cover"
    />
    </Box>
    </Link>
    
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
  <Link to='/roll'>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '50%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={bnwfilmImage}
      alt="Album 2 cover"
    />
    </Box>
    </Link>
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
  <Link to='/roll'>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '35%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={fuji400Image}
      alt="Album 2 cover"
    />
    </Box>
    </Link>
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
  <Link to='/roll'>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '40%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={kodak100Image}
      alt="Album 2 cover"
    />
     </Box>
    </Link>
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
  <Link to='/roll'>
  <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
    <CardMedia
      component="img"
      sx={{ width: '35%', padding: '1rem', objectFit: 'cover', paddingBottom: '0' }}
      image={colorplusImage}
      alt="Album 2 cover"
    />
    </Box>
    </Link>
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
