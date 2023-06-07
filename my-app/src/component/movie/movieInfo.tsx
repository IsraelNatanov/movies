import React, { useEffect, useState } from 'react';
import { API_URL, doApiGet } from '../services/apiService';
import { useParams } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useSelector, useDispatch } from 'react-redux';

import { addMovie } from '../store/features/movieFeaturesSlice';
import { InfoMovie } from '../type/infoMovie';
import CustomizedSnackbars from './customizedSnackbars';
import { useNavigate } from 'react-router-dom';

export default function MovieInfo() {
  const [movie, setMovie] = useState<InfoMovie>();
  const [open, setOpen]= useState<boolean>(false)
  const { imdbID } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddMovie = (imdbID: string, Title: string) => {
   
    const newMovie = { imdbID: imdbID, Title: Title ,DateAdded: new Date().toLocaleDateString(),Amount: quantity};
    dispatch(addMovie(newMovie));
    setOpen(true)
    setTimeout(() => {
        setOpen(false)
        navigate('/')
      }, 10000);

  };

  const handleQuantityChange = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    setQuantity(value < 1 ? 1 : value);
  };



  useEffect(() => {
    doApi();
  }, []);

  const doApi = async () => {
    try {
      let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=3ed580b1`;
      let resp = await doApiGet(url);
      setMovie(resp.data);
      console.log('data', resp.data);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div>
      <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }}>
        רכישת כרטיסים
      </Typography>
      <Card sx={{ maxWidth: 645, margin: ' 0 auto' }}>
      {movie?.Poster && (
          <CardMedia sx={{ height: 140 }} image={movie.Poster} />
        )}
        <CardContent>
          <Typography gutterBottom variant="h5">
            {movie?.Title.split(' ').slice(0, 3).join(' ')}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie?.Plot}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release year: {movie?.Year}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            age limit: 18
          </Typography>
          <Typography variant="body2" color="text.secondary">
                  Address: Cinema City Rashalz
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Phone number: 03-943-7606
                    </Typography>
        </CardContent>
        <div className="row-button">
        <div className="row-select">
      
        <label className="label" htmlFor="quantityInput">:כמות כרטיסים</label>
        <input
          className="input-field"
          type="number"
          id="quantityInput"
          value={quantity}
          onChange={handleQuantityChange}
        />
      
      </div>

      

       
          <button className="button" onClick={()=>handleAddMovie(movie!.imdbID, movie!.Title)}>
            רכישת כרטיסים
          </button>
         
        </div>
      </Card>
      {open && <CustomizedSnackbars setOpen={setOpen} open={open}/>}
    </div>
  );
}
