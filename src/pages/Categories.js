import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoriesMovies from "../components/CategoriesMovies";
import "../styles/components/categoriesMovies.scss";
import "../styles/components/movie.scss";


const Categories = (props) => {
    const id = props.location.state?.id;
    const name = props.location.state?.name;
    return (
        <>

            <Header />

            <div className="banner" style={{ backgroundImage: `url(./images/baniere-2.jpg)` }}>
            </div>
            <div className="categories">
                <CategoriesMovies idGenre={id} nameGenre={name} />
            </div>



            <Footer />

        </>
    )
}

export default Categories;