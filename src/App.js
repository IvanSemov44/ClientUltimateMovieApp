import React from "react";
import {Routes,Route} from 'react-router-dom';
import CardCom from './Components/Movie/Card/Card';
import Create from './Components/Movie/Create/Create';
import MenuHeader from './Components/MenuHeader/MenuHeader'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <MenuHeader />

      <Routes>
        <Route path="/*" element={<CardCom/>} />
        <Route path="/create" element = {<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
