import React from 'react';
import { withRouter } from 'react-router-dom';

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
            <div>
                <button onClick={this.props.history.goBack}>Back</button>
                { this.state.currentPhoto.length !== 0 && 
                    <div>
                        <img src={photo.urls.small} alt={photo.description} />
                        <h3>By {photo.user.name}</h3>
                    </div>
                }
            </div>
        );
    }
};

export default withRouter(Photo);