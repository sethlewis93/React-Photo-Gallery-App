# About

The Photo Gallery is my seventh completed project for the Team Treehouse Full Stack JavaScript Techdegree.
Using React, I wrote the JavaScript to create an image gallery application in the style of modern single-page applications.
This application leverages not only React but supportive tools and API's such as Create React App, Context, React Router, and Hooks.
This application uses the built-in Fetch API to request data from the Flickr API.

# Architecture

The application state is managed by the PhotoAppContext component and distributed to child components as needed.
I leveraged the flexibility of Hooks for two reasons. First, I prefer to utilize functional components and I wanted to keep up with the React documentation and community which is/who are heading in the direction of applications that eliminate the need for class components alltogether. Second, hooks make the code easier to read, cleaner, and more maintainable.

The PhotoAppContext provides context for the entire app to use via {children}. The app returns the objects and functions required by PhotoContainer and SearchForm to make use of state.

## Components

The App container renders the SearchForm, NavBar, and PhotoContainer components, if found, and it renders the NotFound component via React Router's Switch statement in the event that the PhotoContainer component cannot be rendered for any reason. I used React Router's useParams hook to pass url parameters to the PhotoContainer component.

PhotoContainer consumes the data from the custom hook usePhotoContainerState (which itself receives the state from PhotoAppContext).
PhotoContainer renders the Photo child component according to the user's search query (either via the search input field or directly from the url) or according to the NavBar button the user selects.

The SearchForm component both consumes state from PhotoAppContext and maintains it own state in order to fetch data from the Flickr API that matches the user's search. The component's handleSubmit function pushes the request to React's history stack via the useHistory hook and this allows the SearchForm and PhotoContainer components to remain in sync.
