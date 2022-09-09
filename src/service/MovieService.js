const url = "https://ultimatemovieapp.azurewebsites.net/api/movie/";


const header = { 'Content-Type': 'application/json' };

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
export const getLastMovies = () => {
    return (
        fetch(url + `?pageNumber=1&pageSize=4`)
            .then(response => response.json())
    )
}

export const getMoviesByMovieOwner = (token) => {
    return (fetch(url + "movies", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
        .then(response => response.json())
    )
}

export const getMovie = (id) => {
    return (
        fetch(url + id)
            .then(response => response.json())
    )
}

export const createMovie = (data, token) => {
    return (
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    )
}

export const updateMovie = (data, token) => {
    return (
        fetch(url + data.id, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(data)
        })
            .then(response => response)
    )
}

export const deleteMovie = (id) => {
    return (
        fetch(url + id, {
            method: "DELETE",
            headers: header,
        }).then(response => response)
    )
}