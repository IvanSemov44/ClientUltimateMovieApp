import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Button from "react-bootstrap/Button";

import * as movieService from "../../service/MovieService";

import CardTrailer from "../Movie/Card/TrailerCard/CardTrailer";

import "../Trailer/Trailer.css";


const Trailer = () => {
    const [movies, setMovies] = useState({});
    const [pages, setPages] = useState('');
    const param = useParams();
    const navigate = useNavigate();

    let page = param.pageId;
    console.log(page);

    if (page === undefined) {
        page = 1;
    }
    console.log(page)

    useEffect(() => {
        movieService.getMoviesByPageHeader(page)
            .then(result => setPages(JSON.parse(result)));

        movieService.getMoviesByPageBody(page)
            .then(result => {
                setMovies(result)
                console.log(result)
            });
    }, [page]);

    function nextPage() {
        navigate("/trailer/" + (Number(page) + 1), { replace: true });
    }
    function previousPage() {
        navigate("/trailer/" + (Number(page) - 1), { replace: true });
    }

    return (
        <>

            <div className="div-trailer-movie">
                {
                    movies.length > 0
                        ? movies.map(x => <CardTrailer key={x.id} data={x}></CardTrailer>)
                        : <p>No Movie in Database</p>
                }
            </div>

            <div className="trailer-button">
                {pages.HasPrevius
                    ? <FontAwesomeIcon className="trailer-icon" onClick={previousPage} icon={faAngleLeft} />
                    : <></>
                }

                <Button variant="secondary" size="lg" disabled>Current Page: {pages.CurentPage}</Button>
                <Button variant="secondary" size="lg" disabled>Total Page: {pages.TotalPage}</Button>

                {
                    pages.HasNext
                        ? <FontAwesomeIcon className="trailer-icon" onClick={nextPage} icon={faAngleRight} />
                        : <></>
                }
            </div>
        </>
    )
}
export default Trailer;