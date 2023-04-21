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
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import japanImage from '../assets/img/japan.jpg';
import disneyImage from '../assets/img/disney.jpg';
import streetImage from '../assets/img/street.jpeg';
import ciraImage from '../assets/img/cira.jpg';



function MyComponent() {
  const [brandFocused, setBrandFocused] = useState(false);
  const [isoFocused, setIsoFocused] = useState(false);
  
}

function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${
        height * rows
      }&fit=crop&auto=format&dpr=2 2x`,
  
      
    };
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
      placeholder="Search"
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

<ImageList script src="myscript.js"
        sx={{
          width: 500,
          height: 620,
          paddingTop:'2rem',  
          margin:0,
          overflow: 'hidden', 
          transform: 'translateZ(0)',
          backgroundColor:'black',
          '&::-webkit-scrollbar': {
            display: 'none'}
          }}
        rowHeight={300}
        gap={0}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;
          return (
            <ImageListItem key={item.img} cols={cols} rows={rows} >
              <div style={{position: 'absolute', top: '0px', bottom: 0, left: '1rem', right:  '1rem', bottom: '1rem'}}>
                <Link href={item.link}>
                  <img
                    {...srcset(item.img, 250, 200, rows, cols)}
                    alt={item.title}
                    loading="lazy"
                    style={{ objectFit: 'cover', width: '100%', height: '100%', left: '1rem', right:  '1rem', }}
                  />
                </Link>
              </div>



              <ImageListItemBar
  sx={{
    alignItems: 'flex-start',   overflow: 'hidden' ,
    bottom: '1rem', left: '1rem', right: '1rem', textAlign: 'left', paddingTop: '5rem', paddingBottom: '2rem',
    background:
    'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
    'rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 100%)',
    

  }}

  title={
    <div className="title-wrapper">
      {item.title}
    </div>
  }
  subtitle={
    <div className="subtitle-wrapper">
      <div>{item.film}</div>
      <div style={{ marginTop: '5px', marginBottom: '4px' }}>{item.author}</div>
      <div style={{marrinTop:'4px'}}></div>
      <Rating
         name="read-only"
         value={item.rating}
         readOnly
         emptyIcon={<StarIcon style={{color: '#C9C9C9',  fontSize: '1rem', }} />}
         icon={<StarIcon style={{color: '#B47D0E', fontSize: '1rem', }} />}
         sx={{ 
          position: 'absolute', 
          top: '80%', 
          left: item.featured ? 'calc(55px)' : '25%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          background: 'transparent', 
      
         }}
      />
    </div>
  }
  position="bottom"
  actionIcon={
    <IconButton
      sx={{  color: 'white' }}
      aria-label={`star ${item.title}`}
    >
    </IconButton>
  }
  actionPosition="left"
>
</ImageListItemBar>
      
          </ImageListItem>
          
        );
      })}
    </ImageList>





</ScrollableBox>

    </Box>


  );
}

const itemData = [

    {
      img: ciraImage ,
      title: 'Cira Colour',
      film: 'CiraFilm 800',
      author: '@rollelflex_grahy726',
      rating : 4
    },
    {
      img: streetImage,
      title: 'Best Cinematic Film',
      film: 'Kodak Portra 400',
      author: '@rollelflex_grahy726',
      rating : 3,
      link: '/review'
    },
    {
      img: disneyImage,
      title: 'Disney Shots',
      film: 'Kodak Gold 200',
      author: '@rollelflex_grahy726',
      rating : 4
    },
    {
      img: japanImage,
      title: 'Japan Trip',
      film: 'Fujifilm Superia 400',
      author: '@helloimnik',
      rating : 3
    }
  
  ];