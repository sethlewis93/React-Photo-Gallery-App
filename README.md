# PHOTO GALLERY APP

## About
This app is an image gallery SPA built with React and leveraging Context, React Router, Fetch and Hooks APIs. 

# Architecture & Components

The application state is managed by the PhotoAppContext component and distributed to child components as needed.

The PhotoAppContext provides context for the entire app to use via {children}. The app returns the objects and functions required by PhotoContainer and SearchForm to make use of state.

The App container renders the SearchForm, NavBar, and PhotoContainer components, if found, and it renders the NotFound component via React Router's Switch statement in the event that the PhotoContainer component cannot be rendered for any reason. I used React Router's useParams hook to pass url parameters to the PhotoContainer component.

PhotoContainer consumes the data from the custom hook usePhotoContainerState (which itself receives the state from PhotoAppContext).

PhotoContainer renders the Photo child component according to the user's search query (either via the search input field or directly from the url) or according to the NavBar button the user selects.

The SearchForm component both consumes state from PhotoAppContext and maintains it own state in order to fetch data from the Flickr API that matches the user's search. The component's handleSubmit function pushes the request to React's history stack via the useHistory hook and this allows the SearchForm and PhotoContainer components to remain in sync.

# Instructions
