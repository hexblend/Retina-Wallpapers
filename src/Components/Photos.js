import React from 'react';
import {Link} from 'react-router-dom';

const Photos = props => (
  <div className="Photos-Component">
    <div className="PhotosGrid">
      {props.getPhotos &&
        props.getPhotos.map(photo => {
          return (
            <div className="SinglePhoto" key={photo.id}>
              <Link
                to={{pathname: `/photo/${photo.id}`, state: {photo: photo.id}}}>
                {photo.height >= 1600 && photo.width >= 2560 && (
                  <img src={photo.urls.small} alt={photo.urls.description} />
                )}
              </Link>
            </div>
          );
        })}
    </div>
  </div>
);

export default Photos;
