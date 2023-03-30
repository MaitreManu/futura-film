import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PopularMovies from "../components/PopularMovies";
import "../styles/components/movie.scss";
import "../styles/components/home.scss";


const Home = () => {
    return (
        <>
            <Header />
            <div className="banner" style={{ backgroundImage: `url(./images/baniere-1.jpg)` }}>
                <h1>Visionnez l'avenir !</h1>
            </div>
            <div className="home">
                <h2>Votre source de films de science-fiction et beaucoup plus !</h2>
                <PopularMovies />
            </div>
            <Footer />
        </>
    )
}

export default Home;