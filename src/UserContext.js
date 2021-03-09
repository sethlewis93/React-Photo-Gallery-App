import React, { useState, useEffect } from 'react';
import {apiKey} from './config';

const UserContext = React.createContext();

function UserContextProvider({children}) {

    const [defaultPhotos, setdefaultPhotos] = useState([])
    const [dogPhotos, setDogPhotos] = useState([])
    const [coffeePhotos, setCoffeePhotos] = useState([])
    const [computerPhotos, setComputerPhotos] = useState([])
    const [searchedPhotos, setsearchedPhotos] = useState([])
    
    useEffect((query = 'New Hampshire') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setdefaultPhotos(data.photos.photo))
    }, [])

    useEffect((query = 'Bernese Mountain Dogs') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setDogPhotos(data.photos.photo))
    }, [])

    useEffect((query = 'coffee') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setCoffeePhotos(data.photos.photo))
    }, [])

    useEffect((query = 'computers') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setComputerPhotos(data.photos.photo))
    }, [])

    return (
        <UserContext.Provider value={{
            defaultPhotos, 
            dogPhotos, 
            coffeePhotos, 
            computerPhotos, 
            searchedPhotos, 
            setsearchedPhotos
        }}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
