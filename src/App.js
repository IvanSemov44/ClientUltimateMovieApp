import React from "react";
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


import { AuthContext } from "./context/AuthContext/AuthContext";
import useLocalStorage from"./hooks/useLocalStorage";

import MenuHeader from './Components/MenuHeader/MenuHeader';

import Catalog from './Components/Movie/Catalog/Catalog';

import Login from './Components/User/Login/Login';
import Logout from "./Components/User/Logout/Logout";
import Register from './Components/User/Register/Register';


import MyCatalog from './Components/User/MyCatalog/MyCatalog';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import Edit from './Components/Movie/Edit/Edit';

//const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";
const initialAuthState = {
  id: '',
  username: '',
  token: ''
}

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  console.log(user);

  const login =(authData)=>{
    setUser(authData);
    console.log(authData);
  }

  const logout = ()=>{
    setUser( initialAuthState);
  };

  return (
    <AuthContext.Provider value={{login,user,logout}}>
      <div className="App ">
        <MenuHeader />

        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />

          <Route path="mycatalog" element={<MyCatalog />}/>
          <Route path="/create" element={<Create />} />
          <Route path="/view/:movieId" element={<View />} />
          <Route path="/edit/:movieId" element={<Edit />} />

          <Route path="/login" element={<Login />} />
          <Route path="/logout" element = {<Logout/>}/>
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
