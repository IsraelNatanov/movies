import React, { useState } from 'react';
import { ListMovies } from '../type/listMovies';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { addFavorite, removeFavorite } from '../store/features/favouriteFeaturesSlice';
import { Link } from 'react-router-dom';


interface IProps {
  arrMovies: ListMovies[];
}

export default function MoviesList({ arrMovies }: IProps) {

  const favorites = useSelector((state: RootState) => state.favourite.favorites);
  const dispatch = useDispatch();
  


  const handleToggleFavorite = (imdbID: string, Title: string) => {
    const isFavorite = favorites.some((movie: { imdbID: string; }) => movie.imdbID === imdbID);
    if (isFavorite) {
      dispatch(removeFavorite(imdbID));
    } else {
      dispatch(addFavorite({ imdbID, Title }));
    }
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {arrMovies.map((item) => {
            const firstTwoWords = item.Title.split(' ').slice(0, 2).join(' ');
            return (
              <Grid item xs={12} sm={4} md={3} key={item.imdbID}>
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia sx={{ height: 160 }} image={item.Poster} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      {item.Title.split(' ').slice(0, 3).join(' ')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Address: Cinema City Rashalz
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone number: 03-943-7606
                    </Typography>
                  </CardContent>
                  
                  <div className='row-button'>
                 
           
                  <Link className='button' to={"/movieInfo/"+item.imdbID}>רכישת כרטיס</Link>
                
                 
                    <button
                      className='button'
                      onClick={() => handleToggleFavorite(item.imdbID, item.Title)}
                    >
                      {favorites.some((movie: { imdbID: string; }) => movie.imdbID === item.imdbID)
                        ? 'הסר ממועדפים '
                        : 'הוסף למועדפים'}
                    </button>
                    </div>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}