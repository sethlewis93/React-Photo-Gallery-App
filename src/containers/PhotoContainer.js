import React from "react";
import usePhotoContainerState from "../hooks/usePhotoContainerState";

function PhotoContainer() {
  // All required variables accessed from custom hook. This keeps PhotContainer clean and easy to maintain.
  const {
    userQuery,
    location,
    defaultImageElements,
    dogImageElements,
    coffeeImageElements,
    computerImageElements,
    searchImageElements,
  } = usePhotoContainerState();

  return (
    <div className="photo-container">
      <h2>{userQuery}</h2>
      <ul>
        {userQuery === "dogs"
          ? dogImageElements
          : userQuery === "coffee"
          ? coffeeImageElements
          : userQuery === "computers"
          ? computerImageElements
          : location.pathname === "/"
          ? defaultImageElements
          : searchImageElements}
      </ul>
    </div>
  );
}

export default PhotoContainer;
