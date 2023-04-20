import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/system';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Rating from '@mui/material/Rating';
import {Link} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import japanImage from '../assets/img/japan.jpg';
import disneyImage from '../assets/img/disney.jpg';
import streetImage from '../assets/img/street.jpeg';
import ciraImage from '../assets/img/cira.jpg';


import flowerImage from '../assets/img/flower.jpg';

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    
function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,

    
  };
}

  return (
    <>
      <Card sx={{ maxWidth: 500 , maxHeight:800, overflow:'auto', borderRadius:0, border:'0px',
        '&::-webkit-scrollbar': {
            display: 'none'}
        }}>
        <CardContent sx={{ padding: '0rem', position: 'relative', height: '300px' }}>
          <CardMedia 
            component="img"
            image={flowerImage}
            alt="Paella dish"
            sx={{ width: '500px', height: '180px' , objectFit:'cover' }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , paddingTop:'-2rem', marginTop: '-30px'}}>
            <Avatar sx={{ bgcolor: '#22410A', width: 60, height: 60 }}>J</Avatar>
            <CardHeader
              title="jessica"
              subheader="Toronto,Ontario,Canada"
              titleTypographyProps={{ justifyContent: 'center', textAlign: 'center', fontSize: '1.5rem' }}
            />
          </Box>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          </CardContent>
        </Collapse>  

        <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ "& .MuiButton-root:hover": { color: "#B47D0E", borderColor: "#B47D0E", opacity: 0.5 } }}>
        <Button sx={{color:'#B47D0E', borderColor: '#B47D0E'}}>Review</Button>
        <Button sx={{color:'#B47D0E', borderColor: '#B47D0E'}}>Favourite</Button>
        <Button sx={{color:'#B47D0E', borderColor: '#B47D0E'}}>Wishlist</Button>
      </ButtonGroup>
    </Box>
     

      <ImageList script src="myscript.js"
        sx={{
          width: 500,
          height: 620,
          paddingTop:'2rem',  
          margin:0,
          overflow: 'hidden', 
          transform: 'translateZ(0)',
          backgroundColor:'white',
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
    </Card> 
  
    </>
    
    );
}


const itemData = [

  {
    img: ciraImage ,
    title: 'A Night Out',
    author: '@rollelflex_grahy726',
    rating : 4
  },
  {
    img: streetImage,
    title: 'The warmest C41',
    author: '@helloimnik',
    rating : 3,
    link: '/review'
  },
  {
    img: disneyImage,
    title: 'Kodak Gold 200',
    author: '@rollelflex_grahy726',
    rating : 4
  },
  {
    img: japanImage,
    title: 'Fujifilm Superia 400',
    author: '@helloimnik',
    rating : 3
  }

];

