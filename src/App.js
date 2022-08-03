import React from "react";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthContext } from "./context/AuthContext/AuthContext";

import MenuHeader from './Components/MenuHeader/MenuHeader';

import Login from './Components/User/Login/Login';
import Register from './Components/User/Register/Register';

import Catalog from './Components/Movie/Catalog/Catalog';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import Edit from './Components/Movie/Edit/Edit';

//const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";

function App() {
  const [user,setUser] = useState({
    id:'',
    username:'',
    token:''
  });

  const login =(authData)=>{
    setUser(authData);
    console.log(authData);
  }

  return (
    <AuthContext.Provider value={{login,user}}>
      <div className="App ">
        <MenuHeader />

        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/view/:movieId" element={<View />} />
          <Route path="/edit/:movieId" element={<Edit />} />

          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
