import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AppMovie from './appMovie';
import MovieInfo from './movieInfo';
import History from './history';



const AppRouter: React.FC = () => {
  return (

        <Router>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">בית</Link>
              </li>
              <li>
                <Link to="/history">היסטוריה</Link>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="/" element={<AppMovie />} />
            <Route path="/movieInfo/:imdbID" element={<MovieInfo />} />
            <Route path="/history" element={<History />} />

          </Routes>
        </Router>
      );
    
};

export default AppRouter;
