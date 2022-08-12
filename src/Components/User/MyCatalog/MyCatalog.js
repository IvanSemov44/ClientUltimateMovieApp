import React from "react";
import { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import Pagination from "react-bootstrap/Pagination";


import * as movieService from "../../../service/MovieService";
import { AuthContext } from "../../../context/AuthContext";
import CardCom from "../../Movie/Card/Card";
import "../../Movie/Catalog/Catalog.css";

const Catalog = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const [movies, setMovies] = useState({});
    // const [pages, setPages] = useState('');
    // const param = useParams()
    // let page;

    // if (param) {
    //     page = 1;
    // }

    useEffect(() => {
        // movieService.getMoviesByPageHeader(page)
        //     .then(result => setPages(result));

        // movieService.getMoviesByPageBody(page)
        //     .then(result => {
        //         setMovies(result)
        //         console.log(result)
        //     });

        movieService.getMoviesByMovieOwner(user.token)
            .then(result => {
                console.log(result)
                setMovies(result)});
    }, []);

    /*{"CurentPage":1,"TotalPage":2,"PageSize":5,"TotalCount":10,"HasPrevius":false,"HasNext":true} */

    // let active = pages.CurrentPage;
    // let items = [];
    // for (let number = 1; number <= pages.TotalPage; number++) {
    //     items.push(
    //         <Pagination.Item key={number} active={number === active}>
    //             {number}
    //         </Pagination.Item>,
    //     );
    // }
    return (
        <>
            <div className="div-catalog-movie">
                {
                    movies.length > 0
                        ? movies.map(x => <CardCom key={x.id} data={x}></CardCom>)
                        : <p>No Movie in Database</p>
                }
            </div>
            {/* <Pagination size="lg">{items}</Pagination> */}
        </>
    )
}
export default Catalog;
