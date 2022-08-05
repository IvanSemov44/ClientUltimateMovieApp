import { useEffect,useContext } from "react";

import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext/AuthContext";

const Logout = () =>{
    const navigate = useNavigate();
    const {logout}= useContext(AuthContext);

    useEffect(()=>{
        logout();
        navigate('/',{replace:true});
    },[]);


    return null;
}

export default Logout;