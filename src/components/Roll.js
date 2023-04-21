import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import streetImage from '../assets/img/street.jpeg';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { Hidden, linkClasses } from '@mui/material';
import {Link} from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { border } from '@mui/system';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import sheepImage from '../assets/img/sheep.jpg';
import sudaImage from '../assets/img/suda.jpg';
import dogImage from '../assets/img/dog.jpg';


  
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,

    
  };
}


export default function CustomImageList() {
    const theme = useTheme();
    const [value, setValue] = React.useState(2);
   

  return (

    <Box sx={{ display: 'flex', flexDirection: 'column',width: 500,
    height: 800, overflow: 'auto'}}>

<Card sx={{ display: 'flex', backgroundColor: '#333333', height: 400, position: 'relative',borderRadius: 0, overflow:'auto' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, flexShrink: 1 , overflow:'auto'}}>
    
  </Box>
  <CardMedia
    sx={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.7) 100%), url("https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_svphjAkeWsqObuteDmSoA.jpeg")`
    }}
    alt="Live from space album cover"
  />
  <Typography
    component="div"
    variant="h5"
    sx={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      color: '#fff',
      padding: '1.5rem'
    }}
  >
    Kodak Gold 200
<Rating sx={{ flex: '1 0 auto', fontSize:'1rem', padding:'1rem', paddingBottom:'0'}}name="read-only" value={4} readOnly />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

<Icon color="white" style={{ fontSize: '2rem', padding:'0' }}>add_circle</Icon>
<Icon color="white" style={{  fontSize: '2rem', paddingLeft:'0.5rem'  }}>favorite</Icon>

  </Typography>
 
</Card>
   
<Card sx={{ display: 'flex',backgroundColor:'black',height: 250,borderRadius: 0 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
    <CardContent sx={{ flex: '1 0 auto'}}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            '& > legend': { mt: 2 }, paddingBottom:'1rem' ,
          }}
        >
          <Typography sx={{ paddingLeft: '4rem',color: 'white' ,}} component="legend">Rate</Typography>
          <Rating
            name="simple-controlled"
            value={0}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{
              paddingLeft: '4rem',
              "& .MuiRating-iconFilled": {
                color: "#B47D0E"
              },
              "& .MuiRating-iconEmpty": {
                color: "#646464",
                border: '0.5rem'
              }

            }}
          />

        </Box>
        <Box sx={{ color: 'white', fontSize: '2rem', paddingLeft: '5rem'}}>
        <a href="/addreview" style={{ textDecoration: 'none' }}>
  <Typography variant="subtitle1" sx={{ color: 'white', paddingLeft: '0.5rem' }}>Add a review</Typography>
  <RateReviewRoundedIcon style={{  fontSize: '2rem', paddingTop:'0.5rem', color:'white' }}/>
</a>
        </Box>
      </Box>
    </CardContent>
  </Box>
</Card>

    <ImageList script src="myscript.js"
      sx={{
        width: 500,
        height: 800,
        padding:0,
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
    bottom: 0, left: '1rem', right: 0, textAlign: 'left', paddingTop: '6rem', paddingBottom: '2rem',
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
      <div>{item.author}</div>
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
          left: item.featured ? 'calc(55px)' : '22%',
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
  
    
    
    </Box>
  );
}

const itemData = [
  

  {
    img: streetImage ,
    title: 'A Night Out',
    author: '@rollelflex_grahy726',
    rating : 4
  },
  {
    img: dogImage,
    title: 'The warmest C41',
    author: '@helloimnik',
    rating : 3,
    link: '/review'
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_svphjAkeWsqObuteDmSoA.jpeg" ,
    title: 'Kodak Gold 200',
    author: '@rollelflex_grahy726',
    rating : 4
  },
  {
    img: sudaImage,
    title: 'Fujifilm Superia 400',
    author: '@helloimnik',
    rating : 3
  }
  
  
 
 
];
