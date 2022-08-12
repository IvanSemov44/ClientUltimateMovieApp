import React from "react";
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AuthProvider } from "./context/AuthContext";
import OffcanvasProvider  from "./context/OffcanvasContext";

import MenuHeader from './Components/MenuHeader/MenuHeader';

import Catalog from './Components/Movie/Catalog/Catalog';
import Trailer from './Components/Trailer/Trailer';

import Logout from "./Components/User/Logout/Logout";

import About from "./Components/About/About";

import MyCatalog from './Components/User/MyCatalog/MyCatalog';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import Edit from './Components/Movie/Edit/Edit';



function App() {
  return (
    <AuthProvider>

      <OffcanvasProvider>
        <div className="App ">
          <MenuHeader />

          <Routes>
            <Route path="/" element={<Catalog />} />\
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:pageId" element={<Catalog />} />
            <Route path="/trailer" element={<Trailer />} />
            <Route path="/trailer/:pageId" element={<Trailer />} />

            <Route path="mycatalog" element={<MyCatalog />} />
            <Route path="/create" element={<Create />} />
            <Route path="/view/:movieId" element={<View />} />
            <Route path="/edit/:movieId" element={<Edit />} />

            <Route path="/logout" element={<Logout />} />
          </Routes>

          <About />
        </div>
      </OffcanvasProvider>
    </AuthProvider>
  );
}

export default App;
