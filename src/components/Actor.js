import React from "react";
import "../styles/components/actor.scss";
import "../styles/settings.scss";

const Actor = (props) => {

    const { actor, onClickActor } = props;

    return (
        <div className="actor" onClick={onClickActor}>
            <img src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`} alt="profile" />
            <div className="actorContainer">
                <ul>
                    <li className="actorName">{actor.original_name}</li>
                </ul>
            </div>
        </div>
    )
}

export default Actor;