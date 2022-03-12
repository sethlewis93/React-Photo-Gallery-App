import React, { useState, useEffect } from "react";
import { apiKey } from "./config";

const PhotoAppContext = React.createContext();

function PhotoAppContextProvider({ children }) {
  // Repetitive state initializations best kept in Context and shared with other components as needed
  const [defaultPhotos, setdefaultPhotos] = useState([]);
  const [dogPhotos, setDogPhotos] = useState([]);
  const [coffeePhotos, setCoffeePhotos] = useState([]);
  const [computerPhotos, setComputerPhotos] = useState([]);
  const [searchedPhotos, setsearchedPhotos] = useState([]);

  // This is the default query upon app load.
  useEffect((query = "New Hampshire") => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setdefaultPhotos(data.photos.photo));
  }, []);

  // These are the queries available in the nav bar.
  useEffect((query = "dog") => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setDogPhotos(data.photos.photo));
  }, []);

  useEffect((query = "coffee") => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setCoffeePhotos(data.photos.photo));
  }, []);

  useEffect((query = "linux") => {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setComputerPhotos(data.photos.photo));
  }, []);

  return (
    <PhotoAppContext.Provider
      value={{
        defaultPhotos,
        dogPhotos,
        coffeePhotos,
        computerPhotos,
        searchedPhotos,
        setsearchedPhotos,
      }}
    >
      {children}
    </PhotoAppContext.Provider>
  );
}

export { PhotoAppContextProvider, PhotoAppContext };
