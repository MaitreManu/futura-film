import React from "react";
import "../styles/components/movie.scss";
import "../styles/settings.scss";


const Movie = (props) => {
    const { movie, onClickMovie } = props;
    return (
        <div className="movie" onClick={onClickMovie}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
            <div className="conteneur">
                <li className="titre">{movie.title}</li>
            </div>
        </div>
    )
}

export default Movie;