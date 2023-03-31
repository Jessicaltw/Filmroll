import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import dogImage from '../assets/img/dog.jpg';
import disneyImage from '../assets/img/disney.jpg';
import streetImage from '../assets/img/street.jpeg';



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
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        transform: 'translateZ(0)',
      }}
      rowHeight={200}
      gap={0}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows} >
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            
            />
            <ImageListItemBar
              sx={{
             
                alignItems: 'flex-start',
                bottom: 0, left: 0, right: 0, textAlign: 'left', paddingTop: '10px', paddingBottom: '10px',
                background:
                'linear-gradient(to bottom, rgba(0,0,0,0) 0%, ' +
                'rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 100%)'
                
              }}
              title={item.title}
              position="bottom"
              actionIcon={
                <IconButton
                  sx={{  color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
               {/* <StarBorderIcon /> */}
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*_svphjAkeWsqObuteDmSoA.jpeg',
    title: 'Fujifilm Superia X-Tra 400',
    author: '@bkristastucchio',
    featured: true,
  },
  {
    img: streetImage ,
    title: 'Kodak Gold 200',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://storage.googleapis.com/orms-blog/1/2020/11/r1-08357-031a.jpg',
    title: 'Fujifilm Superia 400',
    author: '@helloimnik',
  },
  {
    img: dogImage,
    title: 'Kodak Ultra Max 400',
    author: '@nolanissac',
  },
  {
    img: disneyImage,
    title: 'Kodak ColorPlus',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];
