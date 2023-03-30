import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import Actor from "../components/Actor";
import { useHistory } from "react-router-dom";

const MovieDetails = (props) => {
    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-CAN`;
    const URL_CREDITS = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-CAN`;
    const [detail, setDetail] = useState({});
    const [genres, setGenres] = useState([]);
    const [credits, setCredits] = useState([]);
    const history = useHistory();
    const URL_RECOMMENDATIONS = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-can&page=5`;

    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
            setGenres(res.data.genres);
        });
        axios.get(URL_CREDITS).then((res) => {
            setCredits(res.data.cast);
        });
        axios.get(URL_RECOMMENDATIONS).then((res) => {
            console.log("test" + res.data);
        });

    }, [URL, URL_CREDITS, URL_RECOMMENDATIONS]);

    return (
        <>
            <Header />


            <React.Fragment>
                <div className="details-container">

                    <div className="banner" style={{ backgroundImage: `url(./images/baniere-5.jpg)` }}></div>
                    <div class="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img
                                    className="locandina"
                                    src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
                                    alt="poster"
                                />

                                <h1>{detail.title}</h1>
                                <h4>{detail.release_date}</h4>
                                <h2><h5>Note des utilisateurs</h5>{detail.vote_average}</h2>
                                <span className="minutes">{detail.runtime} min</span>
                                {genres.map((g) => {
                                    return (
                                        <p className="type"
                                            onClick={() => history.push('/categories', { id: g.id, name: g.name })}
                                        >{g.name}</p>
                                    )
                                })}
                            </div>
                            <div className="movie_desc">
                                <p className="text">{detail.overview}</p>
                            </div>
                            <p className="textActor"><b>Distribution</b></p>
                            <div className="actors_horizontal">
                                {credits.slice(0, 6).map(credit => {
                                    <h4>{credits.originalname}</h4>

                                    return (
                                        <div className="actors_desc">
                                            <Actor

                                                actor={credit}

                                                onClickActor={() => history.push("/actorDetails", { id: credit.id })}
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="footer-container">

                </div>
            </React.Fragment>
            <Footer />
        </>
    )
}

export default MovieDetails;
