import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";



export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ 
    backgroundColor: 'black',  width: 500, height: 50, 
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    padding: '10px 0',//borderRadius: '2rem',//
    left: '50%',
    transform: 'translateX(-50%)'
     }} value={value} onChange={handleChange}>
      <BottomNavigationAction 
        label="Favorite"
        value="favorite" 
        icon={<FavoriteIcon sx={{ 
          color: value === 'favorite' ? 'white' : 'white', fontSize: '2rem',}}/>}
      />
      <BottomNavigationAction
        label="Rolls"
        value="favorites"
        icon={<CameraRollIcon sx={{ color: 'white', fontSize: '2rem',}}/>}
      />
      <BottomNavigationAction component={Link}  to="/home"
        label="Home"
        value="nearby"
        icon={<HomeIcon sx={{ color: 'white' , fontSize: '2rem',}} />}
      />
      <BottomNavigationAction 
      label="Account" 
      value="folder" 
      icon={< AccountCircleIcon sx={{ color: 'white' , fontSize: '2rem',}}/>} />
    </BottomNavigation >
  );
}