
const url = "http://localhost:5162/api/movie/";


const header = { 'Content-Type': 'application/json' };
//const pagination = "?pageNumber2&pageSize=5"

export const getMoviesByPageHeader = (page) => {
    return (
        fetch(url + `?pageNumber=${page}&pageSize=8`)
            .then(response => response.headers.get('x-pagination'))
    )
}
export const getMoviesByPageBody = (page) => {
    return (
        fetch(url + `?pageNumber=${page}&pageSize=8`)
            .then(response => response.json())
    )
}

export const getMovie = (id) => {
    return (
        fetch(url + id)
            .then(response => response.json())
    )
}

export const createMovie = (data,token) => {
    return (
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ token 
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    )
}

export const updateMovie = (data,token) => {
    return (
        fetch(url + data.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                 'Authorization': 'Bearer '+ token 
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    console.log(response.ok)
                }
                else {
                    console.log("--", response.ok);
                }
            })
    )
}

export const deleteMovie = (id) => {
    return (
        fetch(url + id, {
            method: "DELETE",
            headers: header,
        }).then(response => {
            if (response.ok) {
                console.log("Fine")
            }
            else {
                console.log("Not Fine")
            }
        })
    )
}


    // const id = "5d586320-5933-4565-b7c7-08da6a52b83b";

    // const data = {
    //   "title": "Update From React added",
    //   "creator": "Semov",
    //   "actors": "pak toj",
    //   "descriptions": "haha",
    //   "createdOn": null,
    //   "changeOn": null,
    //   "imageUrl": "",
    //   "trailerUrl": "",
    //   "subtitleUrl": "",
    //   "downloadUrl": "",
    //   "year": null,
    //   "country": "",
    //   "category": "",
    //   "comments": ""
    // }

    // Movie.deleteMovie(id)