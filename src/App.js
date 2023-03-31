import * as React from "react";
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Account from './components/Account';
import FilmRolls from './components/FilmRolls';
import Home from './components/Home';
import Menu from "./components/Menu";
import Review from './components/Review';
import {Box} from '@mui/material';
import {Stack} from '@mui/material';
import AppBar from '@mui/material/AppBar';


function App() {
  return (
    <Box sx={{backgroundColor: 'black' , color:'white', textAlign: 'center'}}>
 
      <Stack direction="row" justifyContent="center">
    <div className="App">
      Filmroll
    
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/filmrolls" element={<FilmRolls />} />
          <Route exact path="/account" element={<Account/>} />
        </Routes>
        <Menu />
        
        
      </BrowserRouter>
     
    </div>
    </Stack>
    </Box>
  );
}

export default App;

