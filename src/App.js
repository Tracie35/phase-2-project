import React, { useEffect, useState } from "react";
import NavbarComp from "./components/NavbarComp";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
  return(
    <div className="App">
    <NavbarComp/>
    </div>
  );
  }
function App() {
  const [songs, setSongs] = useState([]);

  useEffect(()=>{
    fetch("https://mymusic21.herokuapp.com/songs")
    .then((resp)=>resp.json())
    .then((data)=>{
      setSongs(data)
    }) 
  }, []);

  return (
    <div className="container">
      <div className="row">
      {

        songs.map((song, index) => {
          return <div key={index} className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
              <img src={"images/download.jpeg"} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{song?.track || 'song'}</h5>
                <p class="card-text">Love, Damini is the sixth studio album by Nigerian singer Burna Boy. It was released on 8 July 2022 through Atlantic Records.</p>
                
                <audio src={song?.audio_file} controls>

                        </audio>
              </div>
            </div>
          </div>
        })
      }
      </div>
    </div>
    
    
  )
}

export default App;