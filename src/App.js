import React from "react";
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from "./context/AuthContext"

import MenuHeader from './Components/MenuHeader/MenuHeader';

import Catalog from './Components/Movie/Catalog/Catalog';

import Logout from "./Components/User/Logout/Logout";


import MyCatalog from './Components/User/MyCatalog/MyCatalog';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import Edit from './Components/Movie/Edit/Edit';



function App() {
  return (
    <AuthProvider>
          <div className="App ">
            <MenuHeader />

            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/catalog" element={<Catalog />} />

              <Route path="mycatalog" element={<MyCatalog />} />
              <Route path="/create" element={<Create />} />
              <Route path="/view/:movieId" element={<View />} />
              <Route path="/edit/:movieId" element={<Edit />} />

              <Route path="/logout" element={<Logout />} />
            </Routes>
          </div>
    </AuthProvider >
  );
}

export default App;
