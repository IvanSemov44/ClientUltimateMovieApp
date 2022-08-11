const url = "http://localhost:5162/api/authentication/";
const header = { 'Content-Type': 'application/json' };



export async function register(data) {
    const sentData = {
        ...data,
        roles: ["User"]
    }
    const response = await fetch(url + "register", {
        method: "POST",
        headers: header,
        body: JSON.stringify(sentData)
    });


    if (response.ok === true) {
        return response
    } else {
        throw await response.json();
    }
}

export async function login(data) {

    const response = await fetch(url + "login", {
        method: "POST",
        headers: header,
        body: JSON.stringify(data)
    });
    if (response.ok === true) {
        return await response.json();
    } else {
        throw await response.json();
    }

}