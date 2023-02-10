import { API_KEY } from './config';

const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;


export const getMovies = async () => {
  const { results } = await fetch(API_URL).then((x) => x.json());
  const movies = results.map(
    ({
      id,
    }) => ({
      //key: String(id),
      //title:"Urban Tadka Dining",
      //subtitle:"Nelson Bridge,Singapore",
      //subtitles:"Chinese | Asian",
      poster:require("../../assets/images/restdish1.png"),
    })
  );

  {/*const state = {
    data:[
        {
            //key: String(id),
      //title:"Urban Tadka Dining",
      //subtitle:"Nelson Bridge,Singapore",
      //subtitles:"Chinese | Asian",
      poster:require("../../assets/images/restdish1.png"),
          },
    ]
  }*/}

  return movies;
};
