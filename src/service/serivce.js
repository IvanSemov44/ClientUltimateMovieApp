
const url = "http://localhost:5162/api/companies/";

// const data = {
//   "name": "NewReact",
//   "address": "reactjs.org",
//   "country": "USA"

// };

//const id = "cbd8fbd1-d236-49be-200b-08da6983a66d";

//const patchIt = "e68f2381-7870-47e7-832f-6614ea1a3eee/employees/d0ef7cb7-b836-4b3c-9634-5684161c8a85";



export const partialUpdate = (id, data) => {
    fetch(url + id, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            data
            // [
            //     {
            //         "op": "replace",
            //         "path": "/age",
            //         "value": 33
            //     }
            // ]
        )
    })
}

export const update = (id, data) => {
    fetch(url + id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

}

export const getAll = () => {
    fetch(url)
        .then(response => response.json())
        .then(result => console.log(result));
}

export const getById = (id) => {
    fetch(url + id)
        .then(response => response.json())
}
export const create = (data) =>{

  fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response=>response.json())
}