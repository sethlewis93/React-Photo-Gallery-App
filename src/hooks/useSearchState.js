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

  const { userQuery } = useParams();
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
