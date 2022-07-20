//import logo from './logo.svg';
import './App.css';
import * as Movie from "./service/MovieService"

function App() {

  const id = "5d586320-5933-4565-b7c7-08da6a52b83b";

  const data = {
    "title": "Update From React added",
    "creator": "Semov",
    "actors": "pak toj",
    "descriptions": "haha",
    "createdOn": null,
    "changeOn": null,
    "imageUrl": "",
    "trailerUrl": "",
    "subtitleUrl": "",
    "downloadUrl": "",
    "year": null,
    "country": "",
    "category": "",
    "comments": ""
  }

  Movie.deleteMovie(id)

  return (
    <div className="App">
    </div>
  );
}

export default App;
