import React from "react";
import { useState, useEffect } from "react";

import * as movieService from "../../../service/MovieService";
import CardCom from"../Card/Card";
import "../Catalog/Catalog.css";

const Catalog = () => {

    const [movie, setMovie] = useState({});
    useEffect(() => {
        movieService.getAllMovie()
            .then(result => setMovie(result));
    }, [])
    return (
        <div className="div-catalog-movie">
            {
                movie.length > 0
                    ? movie.map(x =><CardCom  key={x.id} data={x}></CardCom>)
                    : <p>No Movie in Database</p>
            }
        </div>
    )
}
export default Catalog;