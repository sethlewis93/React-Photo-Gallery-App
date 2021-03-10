import React, {useContext} from 'react';
import {useParams, useLocation} from 'react-router-dom'
import {apiKey} from '../config.js';

// Components
import {UserContext} from '../UserContext';
import Photo from '../components/Photo';

function PhotoContainer() {    
    
    const {
        defaultPhotos, 
        dogPhotos, 
        coffeePhotos, 
        computerPhotos, 
        searchedPhotos, 
        setsearchedPhotos
    } = useContext(UserContext)

    const {userQuery} = useParams()
    const location = useLocation()

    let searchImageElements;

    let imageElements = defaultPhotos.map( img => (
            <Photo  
            url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
            secret={img.secret}
            key={img.id}  
            />
        )
    )

    let dogImageElements = dogPhotos.map( img => (
        <Photo  
            url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
            secret={img.secret}
            key={img.id}  
        />
        )
    )

    let coffeeImageElements = coffeePhotos.map( img => (
        <Photo  
            url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
            secret={img.secret}
            key={img.id}  
        />
        )
    )

    let computerImageElements = computerPhotos.map( img => (
        <Photo  
            url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
            secret={img.secret}
            key={img.id}  
        />
        )
    )

   if (searchedPhotos.length === 0 && userQuery !== undefined) {
        fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userQuery}&per_page=24&format=json&nojsoncallback=1`)
            .then(res => res.json())
            .then(data => setsearchedPhotos(data.photos.photo))
        
        searchImageElements = searchedPhotos.map( img => (
            <Photo  
               url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
               secret={img.secret}
               key={img.id}  
            />
            )
        )
    } else if (searchedPhotos.length > 0) {
        searchImageElements = searchedPhotos.map( img => (
            <Photo  
               url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
               secret={img.secret}
               key={img.id}  
            />
            )
        )

    }

    return (
        <div className="photo-container">
            <h2>{userQuery}</h2>
            <ul>
                {

                userQuery === 'computers'
                    ? computerImageElements 
                    : userQuery === 'dogs' 
                        ? dogImageElements 
                        : userQuery === 'coffee' 
                            ? coffeeImageElements 
                            : location.pathname === '/' 
                                ? imageElements 
                                : searchImageElements
                
                }
            </ul>
        </div>
    );
}

export default PhotoContainer