import React, {useContext} from 'react';
import {useParams} from 'react-router-dom'

// Components
import {UserContext} from '../UserContext';
import Photo from '../components/Photo';
import NoResults from '../components/NoResults';

const PhotoContainer = () => {    
    
    const {allPhotos, dogPhotos, coffeePhotos, computerPhotos} = useContext(UserContext)
    const {userQuery} = useParams()

    let imageElements;
    let dogImageElements;
    let coffeeImageElements;
    let computerImageElements;

    if (allPhotos.length > 0) {
         imageElements = allPhotos.map( img => (
             <Photo  
                url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
                secret={img.secret}
                key={img.id}  
             />
            )
        )

    } else {
        imageElements = <NoResults />
    }

    if (dogPhotos.length > 0 && userQuery === 'dogs') {
        dogImageElements = dogPhotos.map( img => (
            <Photo  
               url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
               secret={img.secret}
               key={img.id}  
            />
            )
        )
   }

    if (coffeePhotos.length > 0 && userQuery === 'coffee') {
        coffeeImageElements = coffeePhotos.map( img => (
            <Photo  
               url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
               secret={img.secret}
               key={img.id}  
            />
            )
        )
   }
    if (computerPhotos.length > 0 && userQuery === 'computers') {
        computerImageElements = computerPhotos.map( img => (
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
            <h2>Image Title</h2>
            <ul>
                {userQuery === 'computers'
                    ? computerImageElements 
                    : userQuery === 'dogs' 
                        ? dogImageElements 
                        : userQuery === 'coffee' 
                            ? coffeeImageElements 
                            : imageElements}
            </ul>
        </div>
    );
}

export default PhotoContainer