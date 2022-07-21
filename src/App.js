//import logo from './logo.svg';
import React from "react";
import CardCom from './Components/Movie/Card/Card';
import Create from './Components/Movie/Create/Create';
//mport {MenuHeader}  from "./Components/MenuHeader/MenuHeader";
//import './App.css';
//import * as Movie from "./service/MovieService";
import MenuHeader from './Components/MenuHeader/MenuHeader'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <MenuHeader />
      <CardCom />
      <Create/>
    </div>
  );
}

export default App;
