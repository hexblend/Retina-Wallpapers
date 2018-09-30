import React from 'react';

const Photos = props => (
    <React.Fragment>
        {props.getPhotos && props.getPhotos.map((photo) => {
            return (
                <div key={photo.id} className="col-md-4">
                    {photo.height >= 1600 && photo.width >= 2560 && <img src={photo.urls.small} alt={photo.urls.description} />}
                </div>
            );
        })}
    </React.Fragment>
);

export default Photos;