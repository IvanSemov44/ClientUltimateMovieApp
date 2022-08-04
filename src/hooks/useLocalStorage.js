import {useState} from 'react';


const useLocalStorage = (key,initialValue)=>{
const [] = useState(()=>{
    let item = localStorage.getItem(key);
})
return [
    state
];
}

export default useLocalStorage;