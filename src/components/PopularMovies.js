
import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from 'react-router-dom';
import "../styles/components/movie.scss";
import "../styles/components/home.scss";
import "../styles/settings.scss";

//Création du composant
const PopularMovies = () => {
    //Backend
    //Création de l'état popular
    const [popular, setPopular] = useState([]);
    //Récupération de l'URL
    const URL = "https://api.themoviedb.org/3/discover/movie?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-CAN&page=1&with_genres=878";
    const history = useHistory();
    //Je vais lancer un get (consommer) sur l'API de TMDB (URL) en l'envloppant dans un useEffect
    useEffect(() => {
        axios.get(URL).then((res) => setPopular(res.data.results));
    }, []);

    //Front-end
    return (

        <div className="popularMovies">
            {<ul className="popularMovies-list">
                {popular.map((p) => (
                    <Movie movie={p} onClickMovie={() => history.push('/movieDetails', { id: p.id })} />
                ))
                }
            </ul>

            }
        </div>

    )
}

export default PopularMovies;