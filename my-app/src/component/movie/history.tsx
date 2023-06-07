import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFavorite } from '../store/features/favouriteFeaturesSlice';
import { addMovie } from "../store/features/movieFeaturesSlice";
import { Link } from 'react-router-dom';

export default function History() {

  const dispatch = useDispatch();
  

  const favorites = useSelector((state: RootState) => state.favourite.favorites);
  const movies = useSelector((state: RootState) => state.movie.items);

  const handleDeleteFavorite = (imdbID:string)=>{
    dispatch(removeFavorite(imdbID));
  }
  return (
    <div className="row">
   
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
    <ListItemText sx={{marginLeft:8}} primary="רשימת הסרטים שנצפו"/>

     {movies?.map((movie)=>{
return(
     <ListItem sx={{display:"flex"}}>
        <ListItemText primary={movie.Title.split(' ').slice(0, 3).join(' ')} />
        <ListItemText secondary={movie.DateAdded} />
      </ListItem>
      ) })}
     
    </List>
    <List sx={{ width: "100%", maxWidth: 380, bgcolor: "background.paper" }}>
    <ListItemText sx={{marginLeft:8}} primary="רשימת הסרטים המועדפים"/>

     {favorites?.map((movie)=>{
return(
     <ListItem sx={{display:"flex"}}>
        <ListItemText primary={movie.Title.split(' ').slice(0, 3).join(' ')} />
     <button className="button" onClick={()=>handleDeleteFavorite(movie.imdbID)}>הסרה ממעודפים</button>
     <Link className='button' to={"/movieInfo/"+movie.imdbID}>רכישת כרטיס</Link>
      </ListItem>
      ) })}
     
    </List>
    </div>
  );
}
