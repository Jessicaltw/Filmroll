import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import dogImage from '../assets/img/dog.jpg';
import disneyImage from '../assets/img/disney.jpg';
import streetImage from '../assets/img/street.jpeg';
import towerImage from '../assets/img/tower.webp';
import ciraImage from '../assets/img/cira.jpg';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import bnwImage from '../assets/img/bnw.jpg';
import japanImage from '../assets/img/japan.jpg';
import flowerImage from '../assets/img/flower.jpg';
import { linkClasses } from '@mui/material';
import {Link} from '@mui/material';



function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}



export default function CustomImageList() {
  return (
    <ImageList

      sx={{
        width: 500,
        height: 800,
        padding:0,
        margin:0,
        transform: 'translateZ(0)',
        '&::-webkit-scrollbar': {
          display: 'none'}
      }}
      rowHeight={200}
      gap={0}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows} sx={{overflow: 'hidden'}}>
            <div style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}}>
            <Link href={item.link}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            </Link>
            </div>

<ImageListItemBar
  sx={{
    alignItems: 'flex-start',
    bottom: 0, left: 0, right: 0, textAlign: 'left', paddingTop: '10px', paddingBottom: '10px',
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
      <div style={{ color:'white' }}>{item.film}</div>
      <div style={{ marginTop: '5px', marginBottom: '4px' }}>{item.author}</div>
      <div style={{marrinTop:'4x'}}></div>
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
  );
}

const itemData = [
  
  {
    img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_svphjAkeWsqObuteDmSoA.jpeg',
    title: 'Best Cinematic Film',
    film: 'Kodak Portra 400',
    author: '@bkristastucchio',
    featured: true,
    rating : 5,
    link: '/review'
  },
  {
    img: streetImage ,
    title: 'A Night Out',
    film: 'Kodak Gold',
    author: '@rollelflex_grahy726',
    rating : 4,
    link: '/review'
  },
  {
    img: flowerImage,
    title: 'Flower on Film',
    film: 'Fujifilm Superia 400',
    author: '@helloimnik',
    rating : 3,
    link: '/review'
  },
  {
    img: ciraImage,
    title: 'Cira Colour',
    film: 'CiraFilm 800',
    author: '@arwinneil',
    rating : 3,
    link: '/review'
  },
  {
    img: disneyImage,
    title: 'The best with colour',
    film: 'Kodak ColorPlus',
    author: '@hjrc33',
    rating : 4,
    link: '/review'
  },
  {
    img: dogImage,
    title: 'Gold 200 Review',
    film: 'Kodak Gold 200',
    author: '@rolanissac',
    featured: true,
    rating : 4,
    link: '/review'
  },
  {
    img: towerImage,
    title: 'In the City',
    film: 'Kodak Portra 400',
    author: '@tjdragotta',
    rating : 3,
    link: '/review'
  },
  {
    img: bnwImage,
    title: 'First with BnW',
    film: 'Ilford XP2 Super',
    author: '@katie_wasserman',
    rating : 4,
    link: '/review'
  },
  {
    img: japanImage ,
    title: 'Japan Trip',
    film: 'Kodak 160',
    author: '@silverdalex',
    featured: true,
    rating : 5,
    link: '/review'
  },
 
];
