import React from 'react';
import { Link } from 'react-router-dom';

const Photos = props => (
    <React.Fragment>
        {props.getPhotos && props.getPhotos.map((photo) => {
            return (
                    <div className="col-md-4">
                        <Link to={{ pathname: `/photo/${photo.id}` }}>
                            {photo.height >= 1600 && photo.width >= 2560 && <img src={photo.urls.small} alt={photo.urls.description} />}
                        </Link>
                    </div>
            );
        })}
    </React.Fragment>
);

export default Photos;