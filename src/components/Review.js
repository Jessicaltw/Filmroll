import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import dogImage from '../assets/img/dog.jpg';
import review2Image from '../assets/img/review2.jpg';
import review3Image from '../assets/img/review3.jpg';
import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500 , maxHeight:800, overflow:'auto', borderRadius:0, border:'0px',
    '&::-webkit-scrollbar': {
        display: 'none'}
    }}>
      <CardHeader
      
  avatar={
    
    <Avatar sx={{ bgcolor: '#D6360C', fontSize:'1rem' }} >
      R
    </Avatar>
    
  }
  action={
    <CardActions disableSpacing>
     
     <a href="/roll">
  <IconButton aria-label="close">
    <CloseIcon sx={{color:'black', fontSize:'2rem'}} />
  </IconButton>
</a>
    </CardActions>
  }
  title="The Warmest C41"
  subheader="September 14, 2023"
  titleTypographyProps={{ justifyContent:'center', textAlign: 'center', fontSize: '1.5rem' }}
/>
<Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'right', paddingRight: '1rem', paddingTop:'0' }}>
<Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
        Kodak Gold 200
        </Typography>
  <Rating name="read-only" value={4} readOnly sx={{ fontSize:'1rem' }} />
</Box>

       <CardContent sx={{padding:'0rem'}}>
      
      <CardMedia 
        component="img"
        height="500"
        width="500"
        image={dogImage}
        alt="Paella dish"
      />
       <Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
        Every time I pick up a roll of Kodak Gold 200, I get nostalgic for days long past. Gold 200 was a staple in my household. It was cheap, 
        and you could find it practically anywhere. I put countless rolls of the stuff through my dad’s Pentax ME Super and my thrift store Bell and Howell point and shoot.
        </Typography>
        <CardMedia
        component="img"
        height="250"
        width="500"
        image={review2Image}
        alt="Paella dish"
      />
     
     <Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
       Gold 200 is a medium-speed, consumer film stock that can be had in the 35mm format in your choice of 24 or 36 exposure rolls for anywhere between $3 and $4. For the price, you get a great general purpose film that’s just easy to shoot. Pop it in practically any 35mm camera you can get your hands on, and you’re off the races. 
       And if you’re going for that Instagram ready “vintage” vibe, this is definitely where I’d start. It has a really unique look with a reasonable amount of contrast and ever so slightly teal blues and orangey reds.
        </Typography>
       
       
     
        <CardMedia 
        marginTop="1rem"
        component="img"
        height="300"
        width="500"
        image={review3Image}
        alt="Paella dish"
      />

       
     <Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
     Like every other color-negative film, Kodak Gold 200 has a nice wide exposure latitude. That means you can under and overexpose it a fair bit before the image starts to fall apart. This makes it a great consumer film since you don’t need a particularly accurate meter to achieve good results. 
     It’s probably why it was such a popular choice for disposables.
        </Typography>
      
      </CardContent>
      <CardActions disableSpacing sx={{justifyContent:'right', paddingRight:'1rem', paddingTop:'0rem'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{fontSize:'2rem'}} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon sx={{fontSize:'2rem'}}/>
        </IconButton>
       
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}