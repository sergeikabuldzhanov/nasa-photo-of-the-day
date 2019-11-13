import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Picture from "./components/picture";
import Title from "./components/title";
import Explanation from "./components/explanation";
import styled from 'styled-components';


function App() {
  const [apodData, setApodData] = useState({});
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=m9WPnkZznrHGEzxLtzYelYyVWExoKjdhC0fhty6r')
      .then(response=>{
        setApodData(response.data);
      })
      .catch(error=>{
        console.log(error);
        
      })
  }, []);

  const PictureCard = styled.div`
  width: 1000px;
  margin: 0 auto;
  `;

  return (
    <div className="App">
      <PictureCard>
        <Picture data={apodData}/>
        <div className="text-content">
          <Title title = {apodData.title}/>
          <Explanation explanation = {apodData.explanation}/>
        </div>
        <a href={apodData.hdurl} target="blank">Open in HD</a>
      </PictureCard>
    </div>
  );
}

export default App;
