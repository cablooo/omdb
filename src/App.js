import React from 'react';
import GlobalStyles from './GlobalStyles';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import Nav from './components/Nav';
import Contact from './components/contact';

// Routes
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;