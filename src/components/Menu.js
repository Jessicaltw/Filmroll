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



export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);

  

 
  };

  return (
    <BottomNavigation sx={{ backgroundColor: 'black' ,  width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Search"
        value="recents"
        icon={<SearchIcon sx={{ color: 'white'}}/>}
      />
      <BottomNavigationAction
        label="Rolls"
        value="favorites"
        icon={<CameraRollIcon sx={{ color: 'white'}}/>}
      />
      <BottomNavigationAction
        label="Home"
        value="nearby"
        icon={<HomeIcon sx={{ color: 'white'}} />}
      />
      <BottomNavigationAction 
      label="Account" 
      value="folder" 
      icon={< AccountCircleIcon sx={{ color: 'white'}}/>} />
    </BottomNavigation >
  );
}