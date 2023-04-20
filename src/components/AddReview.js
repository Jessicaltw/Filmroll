import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function FullWidthTextField() {
  return (

    
    <Box
      sx={{
        width: 500,
        height: 800,
        maxWidth: '100%',
      }}
    >
     <Typography sx={{padding:'1rem', fontFamily:'Inter', fontSize:'0.75rem', fontWeight:'500'}} variant="body2" color="text.secondary">
        Every time I pick up a roll of Kodak Gold 200, I get nostalgic for days long past. Gold 200 was a staple in my household. It was cheap, 
        and you could find it practically anywhere. I put countless rolls of the stuff through my dad’s Pentax ME Super and my thrift store Bell and Howell point and shoot.
        </Typography>
      <TextField fullWidth label="fullWidth" id="fullWidth" />
    </Box>
  );
}