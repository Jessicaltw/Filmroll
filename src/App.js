import * as React from "react";
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Account from './components/Account';
import FilmRolls from './components/FilmRolls';
import Home from './components/Home';
import Menu from "./components/Menu";
import Review from './components/Review';
import Roll from './components/Roll';
import AddReview from './components/AddReview';
import {Box} from '@mui/material';
import {Stack} from '@mui/material';
import ButtonAppBar from './components/ButtonAppBar';




function App() {
  return (
    <Box sx={{backgroundColor: 'white' , color:'white', textAlign: 'center', marginTop: 0, margin: 0, padding: 0 }}>
 
      <Stack direction="row" justifyContent="center" mt={0}>
    <div className="App">
      <ButtonAppBar /> 
      <BrowserRouter sx={{ margin: 0, position:'fixed', bottom:0 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/review" element={<Review />} />
          <Route exact path="/filmrolls" element={<FilmRolls />} />
          <Route exact path="/account" element={<Account/>} />
          <Route exact path="/roll" element={<Roll/>} />
          <Route exact path="/addreview" element={<AddReview/>} />
        </Routes>
    
        <Menu />
     
        
        
      </BrowserRouter>
     
    </div>
    </Stack>
    </Box>
  );
}

export default App;

