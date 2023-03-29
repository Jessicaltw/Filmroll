import * as React from "react";
import {  BrowserRouter, Route, Routes} from 'react-router-dom';
import Account from './components/Account';
import FilmRolls from './components/FilmRolls';
import Home from './components/Home';
import Menu from "./components/Menu";
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      hello, Filmroll.

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
  );
}

export default App;

