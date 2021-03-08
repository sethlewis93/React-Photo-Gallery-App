import React from 'react';

const Photo = ({url, secret}) => {

    return (
        <ul>
            <li>
                <img src={url} alt={secret} /> 
            </li>
        </ul>
    );

}

export default Photo;