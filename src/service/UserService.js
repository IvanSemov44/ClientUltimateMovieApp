const url ="http://localhost:5162/api/authentication/";
const header = { 'Content-Type': 'application/json' };



export const register=(data)=>
{
    const sentData ={
        ...data,
        roles:["User"]
    }
    return(
        fetch(url+"register",{
            method:"POST",
            headers:header,
            body: JSON.stringify(sentData)
        })
        .then(response=>console.log(response.status))
    )
}

export const login = (data) =>{

    return (
        fetch(url+"login",{
            method:"POST",
            headers:header,
            body:  JSON.stringify(data)
        })
        .then(response=>response.json())
    );
}