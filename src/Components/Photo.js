import React from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '1686e47585b8407987d325464925639fa05f1195fca4b2c201d4dae923a7f274';

class Photo extends React.Component {
    state = {
        currentPhoto: []
    }

    componentDidMount = async () => {
        const PHOTO_ID = this.props.location.state.photo;
        const request = await fetch(`https://api.unsplash.com/photos/${PHOTO_ID}?&client_id=${API_KEY}`);
        const response = await request.json();
        this.setState({ currentPhoto: response });
        console.log(this.state.currentPhoto);
    }

    render(){
        const photo = this.state.currentPhoto;
        return(
            <div className="container" style={{ 'marginTop': 50 }}>
                <Link to="/" className="btn btn-primary" style={{ 'marginBottom':10 }}>Go back</Link>
                { this.state.currentPhoto.length !== 0 && 
                <div className="row">
                    <div className="col-md-12">
                        <img className="img-fluid" src={photo.urls.small} alt={photo.description} />
                        <h3 className="my-3">By {photo.user.name}</h3>
                    </div>
                </div>
                }
            </div>
        );
    }
};

export default Photo;