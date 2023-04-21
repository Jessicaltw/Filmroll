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
import RateReviewRoundedIcon from '@mui/icons-material/RateReviewRounded';
import { useLocation } from "react-router-dom";


export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');
  const location = useLocation();

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
          component={Link} 
          to="/addreview"
        icon={<RateReviewRoundedIcon sx={{ 
          color: location.pathname === "/addreview" ? "#B47D0E" : "white", fontSize: '2rem',}}/>}
      />
      <BottomNavigationAction
      component={Link} 
      to="/filmrolls"
        
        icon={<CameraRollIcon sx={{color: location.pathname === "/filmrolls" ? "#B47D0E" : "white", fontSize: '2rem',}}/>}
      />
      <BottomNavigationAction 
        component={Link} 
        to="/home"
       
        icon={<HomeIcon sx={{ color: location.pathname === "/home" ? "#B47D0E" : "white", fontSize: '2rem' }} />} 
/>
      <BottomNavigationAction 
       component={Link} 
       to="/account"
  
      icon={< AccountCircleIcon sx={{ color: location.pathname === "/account" ? "#B47D0E" : "white", fontSize: '2rem',}}/>} />
    </BottomNavigation >
  );
}