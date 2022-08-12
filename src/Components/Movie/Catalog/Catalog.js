import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Button from "react-bootstrap/Button";

import * as movieService from "../../../service/MovieService";

import CardCom from "../Card/MovieCard/Card";

import "../Catalog/Catalog.css";


const Catalog = () => {
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
        navigate("/catalog/" + (Number(page) + 1), { replace: true });
    }
    function previousPage() {
        navigate("/catalog/" + (Number(page) - 1), { replace: true });
    }

    return (
        <>

            <div className="div-catalog-movie">
                {
                    movies.length > 0
                        ? movies.map(x => <CardCom key={x.id} data={x}></CardCom>)
                        : <p>No Movie in Database</p>
                }
            </div>

            <div className="catalog-button">
                {pages.HasPrevius
                    ? <FontAwesomeIcon className="catalog-icon" onClick={previousPage} icon={faAngleLeft} />
                    : <></>
                }

                <Button>Current Page: {pages.CurentPage}</Button>
                <Button>Total Page: {pages.TotalPage}</Button>

                {
                    pages.HasNext
                        ? <FontAwesomeIcon className="catalog-icon" onClick={nextPage} icon={faAngleRight} />
                        : <></>
                }
            </div>
        </>
    )
}
export default Catalog;