import React, { useEffect, useState } from "react";

import "./App.scss";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  const [videos, setVideos] = useState([])

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      "X-RapidAPI-Key": "9a1415f26cmshdb16db78cfd4330p155a7cjsn29e5eedb9562",
    },
  };

  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setVideos(response.items)
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(videos);

  return (
    <>
      <Header />
      <div className="mainBody">
        <Sidebar />
        <div className="videos">
          <h1>Recommended</h1>
          <div className="videos_container flex flex-wrap justify-between w-full">
            {
              videos?.map((item, index) => (
                <Card item={item}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
