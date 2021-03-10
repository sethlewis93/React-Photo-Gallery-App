import React from "react";
import usePhotoContainerState from "../hooks/usePhotoContainerState";

function PhotoContainer() {
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
