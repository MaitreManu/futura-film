import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";

const ActorDetails = (props) => {
    const id = props.location.state.id;
    const URL = `https://api.themoviedb.org/3/person/${id}?api_key=8ea86ae16a720efd23613c21e6df48fe&language=fr-CAN`;
    const [detail, setDetail] = useState({});

    useEffect(() => {
        axios.get(URL).then((res) => {
            setDetail(res.data);
        });
    }, [id,URL]);

    return (
        <>
            <Header />

            <React.Fragment>

                <div className="details-container">

                    <div className="banner" style={{ backgroundImage: `url(./images/baniere-6.jpg)` }}></div>
                    <div class="movie_card" id="bright">
                        <div className="info_section">
                            <div className="movie_header">
                                <img
                                    className="locandina"
                                    src={`https://image.tmdb.org/t/p/original/${detail.profile_path}`}
                                    alt="poster"
                                />
                                <h1>{detail.name}</h1>
                                <h4>{detail.birthday}</h4>

                                <span className="minutes">Place of birth : {detail.place_of_birth}</span>
                            </div>
                            <div className="movie_desc">
                                <p className="text">{detail.biography}</p>
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

export default ActorDetails;
