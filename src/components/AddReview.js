import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatLineSpacingIcon from '@mui/icons-material/FormatLineSpacing';

export default function FullWidthTextField() {
  const [name, setName] = React.useState('Cat in the Hat');
  
  return (

    
    <Box
      sx={{
        width: 500,
        height: 800,
        maxWidth: '100%',
      }}
    >
      <Box sx={{
        paddingTop:'1rem',
      }}>
     <Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'1.2rem', fontWeight:'800'}} variant="body2" color="text.secondary">
     Start a Review
        </Typography>
        <Typography sx={{paddingTop:'0rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
        Add content to you review
 using the tool below
        </Typography>
        </Box>
        <Box
      component="form"
      sx={{
        paddingTop:'2rem',
        '& > :not(style)': { m: 1, width: '30ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Name"
        
      />
      <TextField
        id="outlined-uncontrolled"
        label="Brand"   
      />
      <TextField
        id="outlined-uncontrolled"
        label="iso"  
      />
    </Box>

    <Box sx={{paddingTop:'1rem', display:'flex', justifyContent:'center', gap: '1rem'}}>
    <IconButton aria-label="share">
          < AddPhotoAlternateIcon sx={{fontSize:'3rem'}}/>
        </IconButton>

        <IconButton aria-label="share">
          < FormatColorTextIcon sx={{fontSize:'2rem'}}/>
        </IconButton>
     
        <IconButton aria-label="share">
          < FormatLineSpacingIcon sx={{fontSize:'2.6rem'}}/>
        </IconButton>
      </Box>

      
    </Box>
  );
}