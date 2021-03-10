import { useContext } from "react";
import { PhotoAppContext } from "../PhotoAppContext";
import { useParams, useLocation } from "react-router-dom";
import { apiKey } from "../config";

import Photo from "../components/Photo";

function useSearchState() {
  const {
    defaultPhotos,
    dogPhotos,
    coffeePhotos,
    computerPhotos,
    searchedPhotos,
    setsearchedPhotos,
  } = useContext(PhotoAppContext);

  // userQuery is the url parameter required by PhotoContainer to conditionally render the
  // default photos or the user's search
  const { userQuery } = useParams();

  // useLocation hook utilized to render the defaultPhotos data when the user first opens the app
  // because the route location is set to "/"
  const location = useLocation();

  let searchImageElements;

  let defaultImageElements = defaultPhotos.map((img) => (
    <Photo
      url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
      secret={img.secret}
      key={img.id}
    />
  ));

  let dogImageElements = dogPhotos.map((img) => (
    <Photo
      url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
      secret={img.secret}
      key={img.id}
    />
  ));

  let coffeeImageElements = coffeePhotos.map((img) => (
    <Photo
      url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
      secret={img.secret}
      key={img.id}
    />
  ));

  let computerImageElements = computerPhotos.map((img) => (
    <Photo
      url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
      secret={img.secret}
      key={img.id}
    />
  ));

  // A search must happen if the user injects a parameter into the url. That is why "userQuery !== undefined" is spelled out here
  if (searchedPhotos.length === 0 && userQuery !== undefined) {
    fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${userQuery}&per_page=24&format=json&nojsoncallback=1`
    )
      .then((res) => res.json())
      .then((data) => setsearchedPhotos(data.photos.photo));

    searchImageElements = searchedPhotos.map((img) => (
      <Photo
        url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
        secret={img.secret}
        key={img.id}
      />
    ));
    // A search can also happen if data is called from SearchForm's input field and pushed to the searchedPhotos state
  } else if (searchedPhotos.length > 0) {
    searchImageElements = searchedPhotos.map((img) => (
      <Photo
        url={`https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_w.jpg`}
        secret={img.secret}
        key={img.id}
      />
    ));
  }

  return {
    userQuery,
    location,
    defaultImageElements,
    dogImageElements,
    coffeeImageElements,
    computerImageElements,
    searchImageElements,
  };
}

export default useSearchState;
