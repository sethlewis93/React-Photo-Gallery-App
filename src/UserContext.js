import React, { useState, useEffect } from 'react';
import {apiKey} from './config';

const UserContext = React.createContext();

function UserContextProvider({children}) {

    const [allPhotos, setAllPhotos] = useState([])
    const [dogPhotos, setDogPhotos] = useState([])
    const [coffeePhotos, setCoffeePhotos] = useState([])
    const [computerPhotos, setComputerPhotos] = useState([])
    const [searchPhotos, setSearchPhotos] = useState([])
    
    useEffect((query = 'New England') => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setAllPhotos(data.photos.photo))
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


    useEffect((query) => {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setSearchPhotos(data.photos.photo))
    }, [])

    return (
        <UserContext.Provider value={{allPhotos, dogPhotos, coffeePhotos, computerPhotos, searchPhotos}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContextProvider, UserContext}
