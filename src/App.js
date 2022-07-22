import React from "react";
import {Routes,Route} from 'react-router-dom';
import CardCom from './Components/Movie/Card/Card';
import Create from './Components/Movie/Create/Create';
import View from './Components/Movie/View/View';
import MenuHeader from './Components/MenuHeader/MenuHeader'
import 'bootstrap/dist/css/bootstrap.min.css';


//const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";

function App() {

  return (
    <div className="App ">
      <MenuHeader />

      <Routes>
        <Route path="/" element={<CardCom />} />
        <Route path="/Catalog" element={<CardCom />} />
        <Route path="/create" element={<Create />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  );
}

export default App;
