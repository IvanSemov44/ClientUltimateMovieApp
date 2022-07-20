
const url = "http://localhost:5162/api/movie/";

const header = { 'Content-Type': 'application/json' }

export const getAllMovie = () => {

    return (
        fetch(url)
            .then(response => response.json())
    )
}

export const getMovie = (id) => {
    return (
        fetch(url + id)
            .then(response => response.json())
    )
}

export const createMovie = (data) => {
    return (
        fetch(url, {
            method: "POST",
            headers: header,
            body: JSON.stringify(data)
        })
            .then(response => response.json())
    )
}

export const updateMovie = (id, data) => {
    return (
        fetch(url + id, {
            method: "PUT",
            headers: header,
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

export const deleteMovie=(id)=>{
    return(
     fetch(url+id,{
        method: "DELETE",
        headers: header,
     }).then(response=>{
        if(response.ok){
            console.log("Fine")
        }
        else{
            console.log("Not Fine")
        }
     })
    )
}