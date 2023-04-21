import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


export default function ButtonAppBar() {
  return (
    <Router>
    <Box sx={{ flexGrow: 1, backgroundColor: 'black' }}>
      <AppBar position="static" sx={{ backgroundColor: 'black', mt: 0 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}} >
          Filmroll
          </Typography>
          <a href="/login">
         <Button sx={{ color: 'white' }} color="inherit">
          Login
          </Button>
         </a>
        </Toolbar>
      </AppBar>
    </Box>
    </Router>
  );
}