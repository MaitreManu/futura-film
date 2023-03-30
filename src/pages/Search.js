import React from "react";
import SearchMovie from "../components/SearchMovie";
import "../styles/components/movie.scss";
import "../styles/components/searchMovie.scss";


const Search = () => {
    return (


        <div className="banner" style={{ backgroundImage: `url(./images/baniere-4.jpg)` }}>
            <div className="loupe">
                <img src="./images/recherche.png" alt="loupe" />
            </div>
            <div className="text-search">
                <h2>Recherche d'un film</h2>
            </div>

            <div className="search">
                <SearchMovie />
            </div>
        </div>



    )


}

export default Search;