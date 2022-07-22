import React from "react";
import {Routes,Route} from 'react-router-dom';
import Catalog from './Components/Movie/Catalog/Catalog';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import Edit from './Components/Movie/Edit/Edit';
import MenuHeader from './Components/MenuHeader/MenuHeader'
import 'bootstrap/dist/css/bootstrap.min.css';


//const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";

function App() {

  return (
    <div className="App ">
      <MenuHeader />

      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view/:movieId" element={<View />} />
        <Route path="/edit/:movieId" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
