import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/components/movie.scss";
import "../styles/components/searchMovie.scss";
import "../styles/settings.scss";



const SearchMovie = () => {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-CAN&query=${query}`;
    const history = useHistory();

    useEffect(() => {
        axios.get(URL).then((res) => {
            setData(res.data.results);
        });
    }, [query, URL]);//Tableau de dépendance

    const onSearch = (event) => {
        setQuery(event.target.value);
    }

    return (
        <>
            <Header />

            <div className="searchMovie">
                <div className="input-container">
                    <input
                        className="input"
                        placeholder="Entrez un mot clé"
                        onChange={onSearch}
                    ></input>
                </div>
                {query ? (
                    <ul className="searchMovie-list">
                        {data.map((m) => (
                            <Movie movie={m} onClickMovie={() => history.push('/movieDetails', { id: m.id })} />
                        ))}
                    </ul>
                ) : ""}

            </div>
            <Footer />
        </>
    )
}

export default SearchMovie;
