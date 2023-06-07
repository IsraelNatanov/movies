import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet } from '../services/apiService'
import { ListMovies } from '../type/listMovies'
import MoviesList from './moviesList'

const AppMovie: React.FC = () => {
    const [arrMovies, setArrMovies] = useState<ListMovies[]>([])

    useEffect(()=>{
        doApi()
    },[])

    const doApi = async() => {
        try{
       
          let url = "https://www.omdbapi.com/?s=white&apikey=a54785c4"
          let resp = await doApiGet(url);
          setArrMovies(resp.data.Search )
          console.log(resp);
         
        }
        catch(err){
          console.log(err)
    
        }
      } 

  return (
    <div><MoviesList arrMovies = {arrMovies}/></div>
  )
}

export default AppMovie