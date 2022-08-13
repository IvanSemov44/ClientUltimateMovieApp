import React from "react";
import { useState, useEffect } from "react";

import { Spinner } from "../Common/Spinner/Spinner";
import CardTrailer from "../Trailer/TrailerCard/CardTrailer";

import * as MovieService from "../../service/MovieService";

import "../Welcome/Welcome.css"

const Welcome = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        MovieService.getLastMovies()
            .then(result => setMovies(result));
    }, [])



    return (
        <>
            <div className="welcome-div">
                <p>Welcome in </p>
                <p>Ultimate Movie App.</p>
            </div>

            <p className="welcome-p">Hire you can fine some interesting movies exacly for you. Like...</p>

            <div className="div-welcome-movie">
                {
                    movies.length > 0
                        ? movies.map(x => <CardTrailer key={x.id} data={x}></CardTrailer>)
                        : <Spinner />
                }
            </div>

            <p className="welcome-p">You can register and add your favorite movie who is missing<br />
                and  you share with other people from hire.
            </p>
        </>
    )
}

export default Welcome;